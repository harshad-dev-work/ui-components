"use client";

import { useState } from "react";
import BottomBar from "./BottomBar";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { GiHamburgerMenu } from "react-icons/gi";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [openSidebar, setOpenSidebar] = useState(false); // mobile
  const [collapsed, setCollapsed] = useState(true); // desktop

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`
         bg-white h-full z-50 transition-all duration-300

          fixed top-0 left-0
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}

          w-64

          lg:static lg:translate-x-0
          ${collapsed ? "lg:w-16" : "lg:w-64"}
        `}
      >
        <Sidebar collapsed={collapsed} />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between p-2 shadow">
          <button
            className="lg:hidden text-xl"
            onClick={() => setOpenSidebar(true)}
          >
            <GiHamburgerMenu />
          </button>

          <button
            className="hidden lg:block text-xl"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            <GiHamburgerMenu />
          </button>

          <Topbar />
        </div>

        <div className="flex-1 overflow-y-auto p-4">{children}</div>

        <BottomBar />
      </div>
    </div>
  );
}
