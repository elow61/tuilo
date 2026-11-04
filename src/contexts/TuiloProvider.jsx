import {useState, useMemo} from "react";
import { defaultDuo } from "../data/duoPalettes.js";
import ph from "@iconify-json/ph/icons.json";
import recolor from "../lib/recolor.js";
import TuiloContext from "./TuiloContext";

export default function TuiloProvider({ children }) {
  const [selectedIcon, setSelectedIcon] = useState('');
  const [selectedColors, setSelectedColors] = useState(defaultDuo)
  const [mode, setMode] = useState('dark');

  const createdIcon = useMemo(
    () => {
      const iconDetail = ph.icons[selectedIcon]
      let icon = iconDetail && iconDetail.body
      if (selectedColors && iconDetail) {
        icon = recolor(iconDetail.body, selectedColors.primary, selectedColors.secondary)
      }
      return icon
    }, [selectedIcon, selectedColors]
  )

  return <TuiloContext.Provider
    value={{ mode, setMode, createdIcon, selectedIcon, setSelectedIcon,  selectedColors, setSelectedColors}}
  >{children}
  </TuiloContext.Provider>;
}

