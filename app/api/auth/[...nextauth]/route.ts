import { createOwner, getOwner } from "@lib/controller/owner";
import { INewSession } from "@lib/shared/types";
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
      const newSession = session as INewSession;

      if (newSession?.user) {
        const owner = await getOwner(newSession.user.email!);
        // add ownerId to user session
        // this will enable easy access in pages
        newSession.ownerId = owner?.id;
      }      
      return newSession;
    },

    async signIn({ profile }) {
      try {
        if (profile) {
          // for some weid reasons picture is not part of the typings
          // from profile but its present in it
          // had to make it work like so
          const { email, name, picture } = { picture: null, ...profile };
          await createOwner({
            name: name!.replace(" ", "").toLowerCase(),
            email: email!,
            image: picture!,
          });
        }
        return true;
      } catch (error) {
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
