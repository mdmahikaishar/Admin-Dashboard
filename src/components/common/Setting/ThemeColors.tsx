import { THEME_COLORS } from "@/data";
import clsX from "@/utils/clsX";
import React from "react";
import { BiCheck } from "react-icons/bi";
import { useThemeContext } from "@/contexts/Theme";

export default function ThemeColors() {
  const themeContext = useThemeContext();

  return (
    <div className="mt-4">
      <h3 className="mb-2 font-bold dark:text-white cursor-default">
        Theme Colors
      </h3>

      <div className="flex flex-wrap gap-2 text-white text-xl">
        {THEME_COLORS.map((color) => (
          <ColorOption
            color={color}
            active={themeContext.color === color}
            onClick={() =>
              themeContext.dispatch({ type: "SET_COLOR", payload: color })
            }
            key={color}
          />
        ))}
      </div>
    </div>
  );
}

interface IColorOption {
  color: string;
  active: boolean;
  onClick: () => void;
}

export function ColorOption({ color, active, onClick }: IColorOption) {
  return (
    <div
      className={clsX(
        "w-8 aspect-square grid place-items-center border-2 rounded-full transition-colors shadow-sm",
        `bg-${color}`,
        active ? `border-white` : `border-transparent`
      )}
      onClick={onClick}
    >
      {active && <BiCheck />}
    </div>
  );
}
