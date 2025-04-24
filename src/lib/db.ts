import { PrismaClient } from "@prisma/client";

// Type for our global prisma instance
type GlobalThisWithPrisma = typeof globalThis & {
  __prisma?: PrismaClient;
};

// Prevent multiple instances of Prisma Client in development
const getPrismaClient = (): PrismaClient => {
  const globalWithPrisma = globalThis as GlobalThisWithPrisma;

  if (process.env.NODE_ENV === "production") {
    return new PrismaClient({
      log: ["warn", "error"],
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }

  if (!globalWithPrisma.__prisma) {
    globalWithPrisma.__prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });

    // Optional: Add middleware for logging/validation
    globalWithPrisma.__prisma.$use(async (params, next) => {
      const before = Date.now();
      const result = await next(params);
      const after = Date.now();

      console.log(
        `Query ${params.model}.${params.action} took ${after - before}ms`
      );
      return result;
    });
  }

  return globalWithPrisma.__prisma;
};

const prisma = getPrismaClient();

// Proper cleanup for Node.js processes
process.on("beforeExit", async () => {
  await prisma.$disconnect();
});

export default prisma;
