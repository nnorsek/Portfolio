"use client";
import { createContext, useState, useContext, ReactNode } from "react";

const SectionContext = createContext<{
  activeSection: string | null;
  setActiveSection: (section: string) => void;
}>({
  activeSection: null,
  setActiveSection: () => {},
});

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => useContext(SectionContext);
