import { prisma } from '@/server/db';

export async function ensureUserOrg(userId: string) {
  const membership = await prisma.membership.findFirst({ where: { userId } });
  if (membership) return membership.orgId;

  const org = await prisma.organization.create({
    data: {
      name: 'My Organization',
      memberships: {
        create: { userId, role: 'ADMIN' },
      },
    },
    select: { id: true },
  });
  return org.id;
}
