import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  events: {
    async signIn(message) {
      console.log(message);
      await prisma.user.upsert({
        where: {
          email: message.profile.email,
        },
        update: {
          name: message.profile.name,
        },
        create: {
          email: message.profile.email,
          name: message.profile.name,
        },
      });
    },
  },
});
