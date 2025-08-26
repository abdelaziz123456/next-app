import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET() {
  return NextResponse.json([
    { name: "John Doe", email: "john@mail" },
    { name: "John Doe", email: "john@mail" },
    { name: "John Doe", email: "john@mail" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.issues, { status: 400 });
  }
  return NextResponse.json({ name: body.name, id: 1 });
}
