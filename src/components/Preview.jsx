import ph from '@iconify-json/ph/icons.json'
import {useTuilo} from "../contexts/TuiloContext.jsx";

export default function Preview({ title }) {

  const { selectedIcon } = useTuilo()
  const displayName = selectedIcon && selectedIcon.replace('-duotone', '');

  return (
    <div className="previewContainer">
      <div className="previewCanvas">
        <div className="previewTile">
          {selectedIcon && (
            <svg
              viewBox="0 0 256 256"
              width="50"
              height="50"
              key={selectedIcon}
              dangerouslySetInnerHTML={{ __html: ph.icons[selectedIcon].body }}
            />
          )}
        </div>
      </div>
      <div className="previewDetails">
        <h4>{title}</h4>
        <h2>{displayName}</h2>
        <div className="palletColor">
          {/*  List of chosen colors */}
        </div>
      {/*  Size of chosen icon */}
      </div>
    </div>
  )
}