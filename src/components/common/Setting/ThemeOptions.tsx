import { useThemeContext } from "@/contexts/Theme";
import { THEME_OPTIONS } from "@/data";
import React from "react";

export default function ThemeOptions() {
  const themeContext = useThemeContext();

  return (
    <div className="mt-4">
      <h3 className="mb-2 font-bold dark:text-white cursor-default">
        Theme Options
      </h3>

      <div className="flex flex-col gap-2 dark:text-white">
        {THEME_OPTIONS.map((option) => (
          <ThemeOption
            name={option}
            activeTheme={themeContext.theme}
            onChange={() => themeContext.dispatch({type: "SET_THEME", payload: option})}
            key={option}
          />
        ))}
      </div>
    </div>
  );
}

interface IThemeOption {
  name: string;
  activeTheme: string;
  onChange: () => void;
}

function ThemeOption({ name, activeTheme, onChange }: IThemeOption) {
  return (
    <label
      htmlFor={`theme-${name}`}
      className="flex items-center gap-2 text-sm font-semibold cursor-pointer"
    >
      <input
        type="radio"
        name="theme"
        id={`theme-${name}`}
        checked={name === activeTheme}
        onChange={onChange}
      />
      <span className="capitalize">{name}</span>
    </label>
  );
}
