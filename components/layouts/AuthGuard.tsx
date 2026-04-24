"use client";

import { useSession, signIn } from "next-auth/react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="p-4">Checking auth...</div>;
  }

  if (!session) {
    return (
      <div className="h-screen flex items-center justify-center">
        <button
          onClick={() => signIn("google")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login with Google
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
