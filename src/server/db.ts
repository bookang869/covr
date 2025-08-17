import { PrismaClient } from '@prisma/client';

// creates a type-safe way to access the global object with a Prisma instance
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

// if Prisma is already defined, use it, otherwise create a new instance
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['error', 'warn'], // you can add 'query' during debugging
  });
// (Development ONLY) if not in production, set the global Prisma instance to the one we just created
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
