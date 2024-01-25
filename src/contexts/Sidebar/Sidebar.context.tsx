"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

export interface ISidebarContext {
  state: boolean;
  toggle: () => void;
}

const SidebarContext = createContext({} as ISidebarContext);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(false);
  const toggle = () => setState((state) => !state);

  return (
    <>
      <SidebarContext.Provider value={{ state, toggle }}>
        {children}
      </SidebarContext.Provider>
    </>
  );
}

export function useSidebarContext() {
  return useContext(SidebarContext);
}
