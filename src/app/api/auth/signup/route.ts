// app/api/auth/signup/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  await prisma.user.create({
    data: { email, password },
  });
  return NextResponse.json({ success: true });
}
