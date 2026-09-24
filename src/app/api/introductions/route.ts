import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const db = await getDatabase();
    const items = await db
      .collection("introductions")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      data: items.map((doc) => ({
        ...doc,
        id: doc._id.toString(),
      })),
      total: items.length,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch introductions", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = await getDatabase();
    const body = await request.json();

    const introText = encodeURIComponent(
      `Halo! Kami dari Tim Kurator AG Diebra Ecosystem. Menindaklanjuti kesepakatan kolaborasi untuk kebutuhan "${body.topic || "Kemitraan Agribisnis"}", kami menghubungkan kedua pihak.`
    );
    const waLink = `https://wa.me/628132120725?text=${introText}`;

    const newIntro = {
      matchId: body.matchId,
      requesterOrg: body.requesterOrg,
      providerOrg: body.providerOrg,
      topic: body.topic,
      introNotes: body.introNotes || "Fasilitasi komunikasi kemitraan",
      waLink,
      status: "sent", // sent | discussion | collaborating | closed
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("introductions").insertOne(newIntro);

    // Update match status to introduced
    if (body.matchId) {
      await db
        .collection("matches")
        .updateOne(
          { _id: new ObjectId(body.matchId) },
          { $set: { status: "introduced", updatedAt: new Date() } }
        );
    }

    return NextResponse.json({
      data: {
        id: result.insertedId.toString(),
        ...newIntro,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to create introduction", details: error.message },
      { status: 500 }
    );
  }
}
