"use client";
import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { AppReducer, AppState, IAppContext } from "./App.reducer";

const AppContext = createContext<IAppContext>(AppState);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(AppReducer, AppState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
