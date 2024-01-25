"use client";
import { useSidebarContext } from "@/contexts/Sidebar";
import { MEDIUM_SCREEN_SIZE, SIDEBAR_MENUS } from "@/data";
import clsX from "@/utils/clsX";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { BiX } from "react-icons/bi";
import { BsGoogle } from "react-icons/bs";
import { usePathname } from "next/navigation";
import useOutsideClick from "@/hooks/useOutsideClick";
import { IconType } from "react-icons";
import useTheme from "@/hooks/useTheme";

export default function Sidebar() {
  const sidebarContext = useSidebarContext();
  const pathname = usePathname();
  const refSidebar = useRef({} as HTMLDivElement);

  const automaticHideSidebar = () => {
    if (window.innerWidth <= MEDIUM_SCREEN_SIZE) {
      sidebarContext.toggle();
    }
  };

  // click outside
  useOutsideClick([refSidebar], sidebarContext.state, sidebarContext.toggle);

  // resizing window
  useEffect(() => {
    document.addEventListener("resize", automaticHideSidebar);
    return () => document.removeEventListener("resize", automaticHideSidebar);
  }, []);

  return (
    <>
      {/* overlay */}
      {sidebarContext.state && (
        <div className="fixed inset-0 bg-half-transparent md:hidden z-30" />
      )}

      {/* sidebar */}

      <div
        className={clsX(
          "py-4 px-2 sm:px-4 flex-none w-full max-w-xs h-screen bg-main-bg dark:bg-main-dark-bg",
          "fixed md:sticky top-0 transition-all",
          sidebarContext.state
            ? "translate-x-0 shadow-2xl"
            : "-translate-x-full md:translate-x-0",
          "rounded-br-2xl scrollY md:shadow-2xl z-50"
        )}
        ref={refSidebar}
      >
        <div className="mb-8 flex items-center justify-between">
          {/* logo */}
          <Link
            className="flex items-center gap-1 text-xl dark:text-white"
            href="/"
          >
            <BsGoogle />
            <span className="font-bold">Shoppy</span>
          </Link>

          {/* close sidebar */}
          <button
            className="md:hidden w-8 aspect-square grid place-items-center text-2xl rounded-full dark:text-white hover:bg-red-500 hover:text-white transition-colors"
            onClick={sidebarContext.toggle}
          >
            <BiX />
          </button>
        </div>

        {/* menus */}
        {SIDEBAR_MENUS.map((menuGroup) => (
          <div className="mt-4 flex flex-col gap-1" key={menuGroup.name}>
            <h3 className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase cursor-default">
              {menuGroup.name}
            </h3>

            {/* links */}
            {menuGroup.links.map((link) => (
              <MenuItem
                {...link}
                active={pathname === link.href}
                key={link.name}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

interface IMenuItem {
  name: string;
  Icon: IconType;
  href: string;
  active: boolean;
}

function MenuItem({ name, Icon, href, active }: IMenuItem) {
  const { theme } = useTheme();
  const sidebarContext = useSidebarContext();

  return (
    <Link
      href={href}
      className={clsX(
        "px-3 py-2 flex items-center gap-3 rounded-md transition-colors dark:text-white hover:text-white",
        active ? clsX(theme("bg"), "text-white") : theme("hover:bg")
      )}
      onClick={sidebarContext.toggle}
      key={href}
    >
      <Icon className="text-sm sm:text-base" />
      <span className="text-xs sm:text-sm font-semibold">{name}</span>
    </Link>
  );
}
