import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";

export function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "Product 1",
      price: 33,
    },
    {
      id: 2,
      name: "Product 2",
      price: 33,
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.issues, { status: 400 });
  }
  return NextResponse.json({ name: body.name, price: body.price, id: 1 });
}
