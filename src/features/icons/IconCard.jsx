import ph from '@iconify-json/ph/icons.json'
import { useTuilo } from '../../hooks/useTuilo.js'
import IconSVG from '../../components/IconSVG/IconSVG.jsx'
import { displayName } from '../../lib/iconName.js'

export default function IconCard({ name }) {
  const { selectedIcon, setSelectedIcon } = useTuilo()
  const isSelected = selectedIcon === name

  return (
    <div
      onClick={() => setSelectedIcon(name)}
      className={`iconCard ${isSelected ? 'selected' : ''}`}
    >
      <IconSVG body={ph.icons[name].body} />
      <p>{displayName(name)}</p>
    </div>
  )
}
