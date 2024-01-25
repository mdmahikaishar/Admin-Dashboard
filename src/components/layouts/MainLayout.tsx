import { SidebarProvider } from "@/contexts/Sidebar";
import clsX from "@/utils/clsX";
import React, { ReactNode } from "react";
import { Navbar, Setting, Sidebar } from "../common";

export default function MainLayout({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex">
      <SidebarProvider>
        <Sidebar />
        <div className="w-full min-h-screen">
          <Navbar />

          <div className={"p-2 sm:p-4 lg:px-8"}>
            <div
              className={className || ""}
            >
              {children}
            </div>
          </div>
        </div>

        <Setting />
      </SidebarProvider>
    </div>
  );
}
