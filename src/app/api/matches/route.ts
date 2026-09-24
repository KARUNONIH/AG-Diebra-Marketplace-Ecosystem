import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const db = await getDatabase();
    const items = await db
      .collection("matches")
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
      { error: "Failed to fetch matches", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = await getDatabase();
    const body = await request.json();

    const newMatch = {
      requestId: body.requestId,
      resourceId: body.resourceId,
      requestTitle: body.requestTitle,
      resourceTitle: body.resourceTitle,
      requesterOrg: body.requesterOrg,
      providerOrg: body.providerOrg,
      adminNotes: body.adminNotes || "Matched by ecosystem curator",
      requesterConsent: "pending", // pending | approved | rejected
      providerConsent: "pending",
      status: "proposed", // proposed | approved_both | declined | introduced
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("matches").insertOne(newMatch);

    // Update status on request and resource
    if (body.requestId) {
      await db
        .collection("requests")
        .updateOne(
          { _id: new ObjectId(body.requestId) },
          { $set: { status: "matching", updatedAt: new Date() } }
        );
    }
    if (body.resourceId) {
      await db
        .collection("resources")
        .updateOne(
          { _id: new ObjectId(body.resourceId) },
          { $set: { status: "reserved", updatedAt: new Date() } }
        );
    }

    return NextResponse.json({
      data: {
        id: result.insertedId.toString(),
        ...newMatch,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to create match", details: error.message },
      { status: 500 }
    );
  }
}
