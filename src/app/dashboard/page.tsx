import { auth } from '@/server/auth';
import { ensureUserOrg } from '@/server/org';

export default async function Page() {
  const session = await auth();
  if (!session?.user) {
    // Simple guard for now; we’ll centralize guards shortly
    return <div className="text-sm">Please sign in to access the dashboard.</div>;
  }
  const userId = session.user.id;
  const orgId = await ensureUserOrg(userId);

  return (
    <div>
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <p className="text-sm text-muted-foreground mt-2">Org ID: {orgId}</p>
    </div>
  );
}
