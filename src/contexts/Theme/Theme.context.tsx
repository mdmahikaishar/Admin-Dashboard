"use client";
import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { IThemeContext, ThemeReducer, ThemeState } from "./Theme.reducer";

const ThemeContext = createContext<IThemeContext>(ThemeState);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(ThemeReducer, ThemeState);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      <div className={state.theme}>
        <div className="bg-light-gray dark:bg-secondary-dark-bg">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
