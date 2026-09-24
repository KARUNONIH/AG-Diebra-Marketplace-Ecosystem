import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

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
      .collection("resources")
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
      { error: "Failed to fetch resources", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = await getDatabase();
    const body = await request.json();

    const newResource = {
      userId: body.userId || "anonymous_provider",
      organizationName: body.organizationName || "Unknown Org",
      category: body.category || "General",
      title: body.title,
      description: body.description,
      capacitySpec: body.capacitySpec || "",
      region: body.region || "Jawa Barat",
      status: "available", // available | reserved | allocated
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("resources").insertOne(newResource);
    return NextResponse.json({
      data: {
        id: result.insertedId.toString(),
        ...newResource,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to create resource", details: error.message },
      { status: 500 }
    );
  }
}
