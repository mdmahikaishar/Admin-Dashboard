import { IButtonCard } from "@/types";
import clsX from "@/utils/clsX";
import React from "react";
import { CardView } from ".";

export default function ButtonCard({
  name,
  Icon,
  ammount,
  percent,
  increase,
  color,
}: IButtonCard) {
  return (
    <CardView>
      <button
        className={clsX(
          "w-10 aspect-square grid place-items-center rounded-full",
          `bg-${color}-light`
        )}
      >
        <Icon className={clsX(`text-${color}`)} />
      </button>

      <p className="mt-4">
        <strong className="font-bold dark:text-white">{ammount}</strong>
        
        {/* percent */}
        <span
          className={clsX(
            "ml-1 text-sm",
            increase ? "text-green-500" : "text-red-500"
          )}
        >
          {percent}%
        </span>
      </p>
      <span className="text-sm font-bold text-gray-400">{name}</span>
    </CardView>
  );
}
