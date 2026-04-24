"use client";

import { useState } from "react";
import BottomBar from "./BottomBar";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {

    const [opensidebar, setOpenSidebar] = useState(true);


  return (
    <div className="flex flex-row h-full">
      {opensidebar ? (
        <div className="lg:basis-64 md:basis-48 sm:basis-40 basis-40 bg-amber-200">
          <Sidebar />
        </div>
      ) : (
        <>
          <div className="lg:basis-16 bg-amber-300  lg:flex hidden">
            <button>Open Sidebar</button>
          </div>

          <div className="hidden sm:flex lg:hidden">
            hamburger
          </div>
        </>
      )}

      <div>
        <div>
          <Topbar />
        </div>

        <div className="">{children}</div>

        <div>
          <BottomBar />
        </div>
      </div>
    </div>
  );
}
