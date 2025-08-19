// src/server/rbac.ts
import { prisma } from '@/server/db';

export async function getUserRoleInOrg(userId: string, orgId: string) {
  const m = await prisma.membership.findUnique({
    where: { orgId_userId: { orgId, userId } },
    select: { role: true },
  });
  return m?.role ?? null;
}

export async function requireRole(
  userId: string,
  orgId: string,
  role: 'ADMIN' | 'ANALYST' | 'VIEWER',
) {
  const current = await getUserRoleInOrg(userId, orgId);
  if (!current) throw new Error('Not a member of this organization');
  const order = ['VIEWER', 'ANALYST', 'ADMIN'];
  if (order.indexOf(current) < order.indexOf(role)) {
    throw new Error('Insufficient role');
  }
}
