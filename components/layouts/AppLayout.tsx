"use client";

import BottomBar from "./BottomBar";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {


  return (
  <div className="flex flex-row h-full">
    <div className="lg:basis-64 md:basis-48 sm:basis-40 basis-40 bg-amber-200">
        <Sidebar/>
    </div>
    <div>

        <div>
            <Topbar/>
        </div>

        <div className="">
            {children}
        </div>

        <div>
            <BottomBar/>
        </div>

    </div>
  </div>
  );
}
