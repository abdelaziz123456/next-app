import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const product = await prisma.product.findUnique({
    where: { id: Number(params.id) },
  });

  if (!product) {
    return NextResponse.json({ message: "product not found" }, { status: 404 });
  }
  return NextResponse.json(product, { status: 200 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();

  const product = await prisma.product.findUnique({
    where: { id: Number(params.id) },
  });
  if (!product) {
    return NextResponse.json({ message: "product not found" }, { status: 404 });
  }

  const updatedProduct = await prisma.product.update({
    where: { id: Number(params.id) },
    data: { name: body.name, price: body.price },
  });
  return NextResponse.json(updatedProduct, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const product = await prisma.product.findUnique({
    where: { id: Number(params.id) },
  });

  if (!product) {
    return NextResponse.json({ message: "product not found" }, { status: 404 });
  }
  await prisma.product.delete({
    where: { id: Number(params.id) },
  });
  return NextResponse.json(
    { message: `product with id ${params?.id} deleted successfully` },
    { status: 200 }
  );
}
