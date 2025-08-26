import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params?.id > 10) {
    return NextResponse.json({ message: "product not found" }, { status: 404 });
  }
  return NextResponse.json({ id: params?.id, name: "Product 1", price: 33 });
}
