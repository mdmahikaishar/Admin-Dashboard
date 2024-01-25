"use client";
import clsX from "@/utils/clsX";
import React, { useRef, useState } from "react";
import { BiX } from "react-icons/bi";
import useOutsideClick from "@/hooks/useOutsideClick";
import { BsGear } from "react-icons/bs";
import { ThemeColors, ThemeOptions } from ".";
import useTheme from "@/hooks/useTheme";

export default function Setting() {
  const { theme } = useTheme();
  const [state, setState] = useState(false);
  const refSetting = useRef({} as HTMLDivElement);
  const toggle = () => setState((state) => !state);

  // click outside
  useOutsideClick([refSetting], state, toggle);

  return (
    <>
      {/* overlay */}
      {state && (
        <div className="fixed inset-0 bg-half-transparent md:hidden z-30" />
      )}

      {/* toggler button */}
      <button
        className={clsX(
          "fixed right-4 bottom-4 w-10 aspect-square grid place-items-center text-white rounded-full",
          theme("bg")
        )}
        onClick={toggle}
      >
        <BsGear />
      </button>

      {/* setting */}
      <div
        className={clsX(
          "px-4 py-4 flex-none w-full max-w-xs h-screen bg-main-bg dark:bg-main-dark-bg",
          "fixed right-0 top-0 transition-all",
          state ? "translate-y-0 shadow-2xl" : "-translate-y-full",
          "rounded-bl-2xl scrollY z-40"
        )}
        ref={refSetting}
      >
        <div className="mb-8 flex items-center justify-between">
          {/* logo */}
          <span className="font-bold dark:text-white">Setting</span>

          {/* close setting */}
          <button
            className="w-8 aspect-square grid place-items-center text-2xl rounded-full dark:text-white hover:bg-red-500 hover:text-white transition-colors"
            onClick={toggle}
          >
            <BiX />
          </button>
        </div>

        {/* theme options */}
        <ThemeOptions />

        {/* theme colors */}
        <ThemeColors />
      </div>
    </>
  );
}
