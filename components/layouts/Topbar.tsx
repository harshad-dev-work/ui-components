"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Topbar = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center space-x-4">
        <div className="animate-pulse bg-gray-200 h-8 w-8 rounded-full"></div>
        <div className="animate-pulse bg-gray-200 h-4 w-24"></div>
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt={session.user.name || "User"}
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
          <span className="text-sm font-medium">
            {session.user?.name || session.user?.email}
          </span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
        >
          Logout
        </button>
      </div>
    );
  }

  return <div className="text-sm text-gray-600">Not logged in</div>;
};

export default Topbar;
