import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = await getDatabase();
    const body = await request.json();

    const { party, consent } = body; // party: "requester" | "provider", consent: "approved" | "rejected"
    if (!party || !consent) {
      return NextResponse.json(
        { error: "Party ('requester' | 'provider') and consent ('approved' | 'rejected') are required." },
        { status: 400 }
      );
    }

    const match = await db
      .collection("matches")
      .findOne({ _id: new ObjectId(id) });

    if (!match) {
      return NextResponse.json({ error: "Match not found" }, { status: 404 });
    }

    const updateFields: Record<string, any> = {
      updatedAt: new Date(),
    };

    if (party === "requester") {
      updateFields.requesterConsent = consent;
    } else if (party === "provider") {
      updateFields.providerConsent = consent;
    }

    // Determine current consent state
    const newRequesterConsent =
      party === "requester" ? consent : match.requesterConsent;
    const newProviderConsent =
      party === "provider" ? consent : match.providerConsent;

    let autoIntroCreated = null;

    if (
      newRequesterConsent === "rejected" ||
      newProviderConsent === "rejected"
    ) {
      updateFields.status = "declined";
    } else if (
      newRequesterConsent === "approved" &&
      newProviderConsent === "approved"
    ) {
      updateFields.status = "approved_both";

      // Card #8 Requirement: Auto-create introduction upon dual-consent
      const introMessage = encodeURIComponent(
        `Halo! Kami dari Tim Kurator AG Diebra Ecosystem. Kemitraan antara "${match.requesterOrg}" dan "${match.providerOrg}" telah disetujui kedua belah pihak untuk topik: "${match.requestTitle} & ${match.resourceTitle}". Silakan berkoordinasi lebih lanjut.`
      );
      const waLink = `https://wa.me/628132120725?text=${introMessage}`;

      const newIntro = {
        matchId: id,
        requesterOrg: match.requesterOrg,
        providerOrg: match.providerOrg,
        topic: `${match.requestTitle} & ${match.resourceTitle}`,
        introNotes: "Auto-facilitated after dual-consent approval",
        waLink,
        status: "sent",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const introResult = await db.collection("introductions").insertOne(newIntro);
      autoIntroCreated = { id: introResult.insertedId.toString(), ...newIntro };
      updateFields.status = "introduced";
    }

    const updatedMatch = await db
      .collection("matches")
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: updateFields },
        { returnDocument: "after" }
      );

    return NextResponse.json({
      data: {
        ...updatedMatch,
        id: updatedMatch?._id.toString(),
      },
      autoIntro: autoIntroCreated,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to update consent", details: error.message },
      { status: 500 }
    );
  }
}
