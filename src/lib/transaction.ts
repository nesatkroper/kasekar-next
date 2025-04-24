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

// Example usage:
/*
const result = await runTransaction(async (tx) => {
  const user = await tx.user.create({ data: { ... } })
  await tx.account.create({ data: { userId: user.id, ... } })
  return user
})
*/
