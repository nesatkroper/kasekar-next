import prisma from "./db";
import type { Prisma } from "@prisma/client";

export async function runTransaction<T>(
  operations: (prisma: Prisma.TransactionClient) => Promise<T>,
  options?: { maxWait?: number; timeout?: number }
): Promise<T> {
  return await prisma.$transaction(async (tx) => {
    try {
      return await operations(tx);
    } catch (error) {
      console.error("Transaction failed:", error);
      throw error; // Re-throw for error handling middleware
    }
  }, options);
}
