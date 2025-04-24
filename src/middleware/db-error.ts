import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

export function handleDatabaseError(error: unknown) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // Handle known Prisma errors
    switch (error.code) {
      case "P2002":
        return new NextResponse(
          JSON.stringify({ error: "Unique constraint violation" }),
          { status: 409 }
        );
      case "P2025":
        return new NextResponse(JSON.stringify({ error: "Record not found" }), {
          status: 404,
        });
      default:
        console.error("Prisma error:", error);
        return new NextResponse(JSON.stringify({ error: "Database error" }), {
          status: 500,
        });
    }
  }

  // Handle other errors
  console.error("Unexpected error:", error);
  return new NextResponse(JSON.stringify({ error: "Internal server error" }), {
    status: 500,
  });
}
