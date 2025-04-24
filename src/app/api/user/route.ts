import prisma from "@/lib/db";
import { handleDatabaseError } from "@/middleware/db-error";
import { NextResponse } from "next/server";
import { runTransaction } from "@/lib/transaction";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        profile: true,
        posts: {
          take: 5,
          orderBy: { createdAt: "desc" },
        },
      },
      where: {
        active: true,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    return handleDatabaseError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const newUser = await runTransaction(
      async (tx) => {
        const user = await tx.user.create({
          data: {
            email: body.email,
            name: body.name,
            role: "USER",
          },
        });

        await tx.profile.create({
          data: {
            userId: user.id,
            bio: body.bio || "",
          },
        });

        return user;
      },
      { timeout: 5000 }
    );

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return handleDatabaseError(error);
  }
}
