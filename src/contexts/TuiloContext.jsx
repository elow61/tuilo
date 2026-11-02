import { createContext, useState, useContext } from "react";

const TuiloContext = createContext(null)

export default function TuiloProvider({ children }) {
  const [selectedIcon, setSelectedIcon] = useState('');
  return <TuiloContext.Provider value={{ selectedIcon, setSelectedIcon }}>{children}</TuiloContext.Provider>;
}

export function useTuilo() {
  const context = useContext(TuiloContext);
  if (!context) {
    throw new Error("TuiloContext is null");
  }
  return context;
}
