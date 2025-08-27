import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  console.log(params.id);
  const users = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });
  if (!users) {
    return NextResponse.json({ message: "user not found" }, { status: 404 });
  }

  return NextResponse.json(users);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });
  if (!user) {
    return NextResponse.json({ message: "user not found" }, { status: 404 });
  }

  if (!validation.success) {
    return NextResponse.json(validation.error.issues, { status: 400 });
  }

  const updatedUser = await prisma.user.update({
    where: { id: Number(params.id) },
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });

  if (!user) {
    return NextResponse.json({ message: "user not found" }, { status: 404 });
  }
  await prisma.user.delete({
    where: { id: Number(params.id) },
  });
  return NextResponse.json(
    { message: `user with id ${params?.id} deleted successfully` },
    { status: 200 }
  );
}
