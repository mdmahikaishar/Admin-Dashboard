"use client";
import { useThemeContext } from "@/contexts/Theme";

export default function useTheme() {
  const themeContext = useThemeContext();

  const theme = (property: "bg" | "hover:bg" | "text") =>
    `${property}-${themeContext.color}`;

  return { theme };
}
