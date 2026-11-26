import "server-only";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { connection } from "next/server";

function createPrisma() {
  return new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL, idleTimeoutMillis: 300_000, max: 5 }) });
}

const globalForPrisma = globalThis as unknown as { __prisma?: PrismaClient };
export const prisma = globalForPrisma.__prisma ?? createPrisma();
if (process.env.NODE_ENV !== "production") globalForPrisma.__prisma = prisma;

export async function requestDb() {
  await connection();
  return prisma;
}
