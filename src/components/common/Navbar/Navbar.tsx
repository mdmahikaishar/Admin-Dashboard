"use client";
import { useAppContext } from "@/contexts/App";
import { useSidebarContext } from "@/contexts/Sidebar";
import clsX from "@/utils/clsX";
import React from "react";
import {
  BiArrowFromTop,
  BiBell,
  BiCart,
  BiChat,
  BiMenu,
  BiSearch,
} from "react-icons/bi";
import useTheme from "@/hooks/useTheme";

const styles = {
  button:
    "w-8 aspect-square grid place-items-center rounded-full hover:text-white",
};

export default function Navbar() {
  const { theme } = useTheme();
  const sidebarContext = useSidebarContext();

  return (
    <div className="h-12 px-2 sm:px-4 lg:px-8 flex items-center justify-between bg-main-bg dark:bg-main-dark-bg dark:text-white shadow-md">
      <div className="flex items-center gap-1 md:gap-2">
        <button
          className={clsX(styles.button, theme("hover:bg"))}
          onClick={sidebarContext.toggle}
        >
          <BiMenu />
        </button>
        <button className={clsX(styles.button, theme("hover:bg"))}>
          <BiSearch />
        </button>
      </div>
      <div className="flex items-center gap-1 md:gap-2">
        <button className={clsX(styles.button, theme("hover:bg"))}>
          <BiCart />
        </button>
        <button className={clsX(styles.button, theme("hover:bg"))}>
          <BiChat />
        </button>
        <button className={clsX(styles.button, theme("hover:bg"))}>
          <BiBell />
        </button>
        <div
          className={clsX(
            "h-8 flex items-center gap-2 text-sm rounded-full text-white cursor-pointer",
            theme("bg")
          )}
        >
          <div className="w-8 aspect-square grid rounded-full overflow-hidden bg-black dark:bg-white"></div>
          <span className="hidden md:block ">
            Hi, <strong className="font-semibold">Michal</strong>
          </span>
          <BiArrowFromTop className="hidden md:block mr-2" />
        </div>
      </div>
    </div>
  );
}
