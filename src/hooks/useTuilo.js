import {useContext} from "react";
import TuiloContext from "../contexts/TuiloContext.js";

export function useTuilo() {
  const context = useContext(TuiloContext);
  if (!context) {
    throw new Error("TuiloContext is null");
  }
  return context;
}
