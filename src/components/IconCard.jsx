import ph from '@iconify-json/ph/icons.json'
import {useTuilo} from "../contexts/TuiloContext.jsx";

export default function IconCard({name}) {

  const { selectedIcon, setSelectedIcon } = useTuilo()
  const displayName = name.replace('-duotone', '');
  let isSelected = selectedIcon === name;

  return (
    <div
      onClick={(e) => setSelectedIcon(name)}
      className={`iconCard ${isSelected ? 'selected' : ''}`}
    >
      <svg
        viewBox="0 0 256 256"
        width="50"
        height="50"
        key={name}
        dangerouslySetInnerHTML={{ __html: ph.icons[name].body }}
      />
      <p>{displayName}</p>
    </div>
  )
}
