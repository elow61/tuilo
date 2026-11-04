import { useTuilo } from '../../hooks/useTuilo.js'

export default function DuoSwatch({ duo, selected }) {
  const { setSelectedColors } = useTuilo()

  return (
    <button
      type="button"
      className={`duoSwatch ${selected ? 'selected' : ''}`}
      aria-pressed={selected}
      aria-label={duo.name}
      style={{ '--primaryColor': duo.primary, '--secondaryColor': duo.secondary }}
      onClick={() => setSelectedColors(duo)}
    />
  )
}
