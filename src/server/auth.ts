import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';
// import Credentials from 'next-auth/providers/credentials';
import { prisma } from '@/server/db';
// import { compare } from 'bcrypt'; // only if you add password login

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'database' },
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
      allowDangerousEmailAccountLinking: true,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    // Optional email/password for dev/demo
    // Credentials({
    //   name: 'Credentials',
    //   credentials: {
    //     email: { label: 'Email', type: 'email' },
    //     password: { label: 'Password', type: 'password' },
    //   },
    //   async authorize(creds) {
    //     if (!creds?.email || !creds.password) return null;
    //     const user = await prisma.user.findUnique({ where: { email: creds.email } });
    //     if (!user || !user.passwordHash) return null;
    //     const ok = await compare(creds.password, user.passwordHash);
    //     return ok ? user : null;
    //   },
    // }),
  ],
  pages: {
    // space to create custom pages later: signIn: '/signin'
  },
  callbacks: {
    async session({ session, user }) {
      // attach user id for server components convenience
      if (session.user) (session.user as any).id = user.id;
      return session;
    },
  },
});
