import {useTuilo} from "../../hooks/useTuilo.js";

export default function ColorPicker({ hexaColor, level, levelTitle }) {

  const { selectedColors, setSelectedColors } = useTuilo()

  function onColorChange(hexaColor) {
    const newColors = { ...selectedColors, [level]: hexaColor };
    setSelectedColors(newColors)
  }

  return (
    <label className="mainColorTile">
      <div className="tileColor" style={{ backgroundColor: hexaColor }}>
        <input
          type="color"
          value={hexaColor}
          onChange={(e) => onColorChange(e.target.value)}
        />
      </div>
      <div className="hexaColor">
        <p>{levelTitle}</p>
        <span>{hexaColor}</span>
      </div>
    </label>
  )
}
