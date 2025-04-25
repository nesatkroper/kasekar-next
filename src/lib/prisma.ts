// src/lib/prisma.ts
import { PrismaClient } from "@/generated/prisma"; // use your custom output

// Global type for development reuse
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Singleton pattern to avoid multiple instances in dev
export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
