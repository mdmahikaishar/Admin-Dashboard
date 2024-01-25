import { THEME_COLORS, THEME_OPTIONS } from "@/data";
import { Dispatch } from "react";

type TThemeAction =
  | { type: "SET_THEME"; payload: string }
  | { type: "SET_COLOR"; payload: string };

export interface IThemeContext {
  theme: string;
  color: string;
  dispatch: Dispatch<TThemeAction>;
}

export const ThemeState = {
  theme: THEME_OPTIONS[0],
  color: THEME_COLORS[0],
  dispatch: (value: TThemeAction) => null,
};

export function ThemeReducer(state: IThemeContext, action: TThemeAction) {
  switch (action.type) {
    case "SET_THEME": {
      return { ...state, theme: action.payload };
    }
    case "SET_COLOR": {
      return { ...state, color: action.payload };
    }
    default: {
      return state;
    }
  }
}
