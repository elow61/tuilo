export default function ColorPicker({ hexaColor, levelTitle, onColorChange }) {
  return (
    <label className="mainColorTile">
      <div className="tileColor" style={{ backgroundColor: hexaColor }}>
        <input
          type="color"
          value={hexaColor}
          // onChange={(e) => onColorChange(e.target.value)}
        />
      </div>
      <div className="hexaColor">
        <p>{levelTitle}</p>
        <span>{hexaColor}</span>
      </div>
    </label>
  )
}
