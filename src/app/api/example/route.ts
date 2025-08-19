import { auth } from '@/server/auth';
import { requireRole } from '@/server/rbac';

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return new Response('Unauthorized', { status: 401 });
  const userId = session.user.id;

  const { orgId } = await req.json(); // or derive from URL/session; in MVP it's single-org
  await requireRole(userId, orgId, 'ANALYST');

  // ...perform mutation
  return new Response('ok');
}
