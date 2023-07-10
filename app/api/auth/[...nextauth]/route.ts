import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // save user session 
      return session;
    },

    async signIn({ profile }) {
      try {
        // save user profile to db
        console.log({ profile });
        return true;
      } catch (error) {
        console.log("na here ooo", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
