import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/app/lib/mongodb';
import User from '@/app/models/user';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.error('Credentials error : ', error);
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
