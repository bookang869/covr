import { auth, signIn, signOut } from '@/server/auth';

export default async function UserNav() {
  const session = await auth();
  return (
    <div className="flex items-center gap-3 text-sm">
      {session?.user ? (
        <>
          <span className="text-muted-foreground">{session.user.name ?? session.user.email}</span>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button className="underline">Sign out</button>
          </form>
        </>
      ) : (
        <form
          action={async () => {
            'use server';
            await signIn('google');
          }}
        >
          <button className="underline">Sign in with Google</button>
        </form>
      )}
    </div>
  );
}
