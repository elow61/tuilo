import { useTuilo } from '../../hooks/useTuilo.js'

export default function ButtonModeToggle({ value }) {
  const { mode, setMode } = useTuilo()

  return (
    <button type="button" aria-pressed={mode === value} onClick={() => setMode(value)}>
      {value}
    </button>
  )
}
