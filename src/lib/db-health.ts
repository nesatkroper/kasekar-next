import prisma from "./db";

export const checkDatabaseConnection = async () => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return {
      status: "healthy",
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      status: "unhealthy",
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
    };
  }
};

// Usage in API route: /api/health
export async function GET() {
  const dbStatus = await checkDatabaseConnection();
  return new Response(JSON.stringify(dbStatus), {
    status: dbStatus.status === "healthy" ? 200 : 503,
    headers: { "Content-Type": "application/json" },
  });
}
