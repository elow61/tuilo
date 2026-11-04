import {useTuilo} from "../contexts/TuiloContext.jsx";

export default function DuoColorCard({ selectedColors, selected, primary, secondary }) {

  const { setSelectedColors } = useTuilo()

  return (
    <button
      type="button"
      className={`duoSwatch ${selected ? 'selected' : ''}`}
      aria-pressed={selected}
      style={{ '--primaryColor': primary, '--secondaryColor': secondary }}
      onClick={(e) => setSelectedColors(selectedColors)}
    />
  )
}