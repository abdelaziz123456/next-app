import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function Get(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params?.id > 10) {
    return NextResponse.json({ message: "user not found" }, { status: 404 });
  }
  return NextResponse.json([{ name: "John Doe", email: "john@mail" }]);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (params?.id > 10) {
    return NextResponse.json({ message: "user not found" }, { status: 404 });
  }

  if (!validation.success) {
    return NextResponse.json(validation.error.issues, { status: 400 });
  }
  return NextResponse.json({ name: body.name, id: 1 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params?.id > 10) {
    return NextResponse.json({ message: "user not found" }, { status: 404 });
  }
  return NextResponse.json(
    { message: `user with id ${params?.id} deleted successfully` },
    { status: 200 }
  );
}
