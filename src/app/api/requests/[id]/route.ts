import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ObjectId format" }, { status: 400 });
    }
    const db = await getDatabase();
    const item = await db
      .collection("requests")
      .findOne({ _id: new ObjectId(id) });

    if (!item) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 });
    }

    return NextResponse.json({
      data: {
        ...item,
        id: item._id.toString(),
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch request", details: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ObjectId format" }, { status: 400 });
    }
    const db = await getDatabase();
    const body = await request.json();

    const updatePayload: Record<string, any> = {
      ...body,
      updatedAt: new Date(),
    };
    delete updatePayload._id;
    delete updatePayload.id;

    const result = await db
      .collection("requests")
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: updatePayload },
        { returnDocument: "after" }
      );

    if (!result) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 });
    }

    return NextResponse.json({
      data: {
        ...result,
        id: result._id.toString(),
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to update request", details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ObjectId format" }, { status: 400 });
    }
    const db = await getDatabase();
    const result = await db
      .collection("requests")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, id });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to delete request", details: error.message },
      { status: 500 }
    );
  }
}
