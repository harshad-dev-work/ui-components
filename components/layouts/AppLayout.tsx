"use client";

import { useState } from "react";
import BottomBar from "./BottomBar";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {

    const [opensidebar, setOpenSidebar] = useState(false);

const toggleSidebar = (): void => {
  setOpenSidebar((prev) => !prev);
};

  return (
    <div className="flex flex-row h-full">
      {opensidebar ? (
        <div className="lg:basis-64 md:basis-48 sm:basis-40 basis-40 bg-amber-200">
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
      ) : (
        <>
          <div className="lg:basis-16 bg-amber-300  lg:flex hidden">
            <button onClick={toggleSidebar}>Open Sidebar</button>
          </div>

          <div className=" sm:flex md:flex lg:hidden">
            <button onClick={toggleSidebar}>hamburger</button>
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
