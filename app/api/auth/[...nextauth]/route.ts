// /app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import pool from "@/lib/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      try {
        const { name, email, image } = user;

        if (!email) return false;

        // ✅ check if user exists
        const [rows]: any = await pool.query(
          "SELECT id FROM users WHERE email = ?",
          [email]
        );

        if (rows.length === 0) {
          // ✅ insert new user
          await pool.query(
            "INSERT INTO users (name, email, image) VALUES (?, ?, ?)",
            [name, email, image]
          );
        }

        return true;
      } catch (error) {
        console.error("DB Error:", error);
        return false;
      }
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };