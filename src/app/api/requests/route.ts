import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request: NextRequest) {
  try {
    const db = await getDatabase();
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    const status = searchParams.get("status");

    const query: Record<string, any> = {};
    if (category) query.category = category;
    if (status) query.status = status;

    const items = await db
      .collection("requests")
      .find(query)
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
      { error: "Failed to fetch requests", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = await getDatabase();
    const body = await request.json();

    const newRequest = {
      userId: body.userId || "anonymous_user",
      organizationName: body.organizationName || "Unknown Org",
      category: body.category || "General",
      title: body.title,
      description: body.description,
      targetRegion: body.targetRegion || "Jawa Barat",
      urgency: body.urgency || "medium",
      status: "submitted", // submitted | reviewing | matching | matched | closed
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("requests").insertOne(newRequest);
    return NextResponse.json({
      data: {
        id: result.insertedId.toString(),
        ...newRequest,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to create request", details: error.message },
      { status: 500 }
    );
  }
}
