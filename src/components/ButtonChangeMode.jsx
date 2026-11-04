import {useTuilo} from "../contexts/TuiloContext.jsx";

export default function ButtonChangeMode({ defaultMode }) {

  const { mode, setMode } = useTuilo()
  const selected = mode && mode === defaultMode

  return (
    <button type="button" aria-pressed={selected} className={`button-${defaultMode}`} onClick={(e) => {setMode(defaultMode)}}>
      {defaultMode}
    </button>
  )
}
