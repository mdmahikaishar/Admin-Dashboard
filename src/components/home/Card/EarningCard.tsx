import useTheme from "@/hooks/useTheme";
import clsX from "@/utils/clsX";
import React from "react";
import { CardView } from ".";

export default function EarningCard() {
  const {theme} = useTheme();

  return (
    <CardView>
      <div className="">
        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400">
          Earnings
        </h3>
        <strong className="text-xl dark:text-white">${"63,448.78"}</strong>
      </div>

      <button
        className={clsX(
          "px-4 py-2 text-sm font-bold text-white rounded-md",
          theme("bg")
        )}
      >
        Download
      </button>
    </CardView>
  );
}
