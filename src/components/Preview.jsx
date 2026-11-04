import {useTuilo} from "../contexts/TuiloContext.jsx";
import IconSVG from "./IconSVG.jsx";

export default function Preview({ title }) {

  const { createdIcon, selectedIcon } = useTuilo()
  const displayName = selectedIcon && selectedIcon.replace('-duotone', '');

  return (
    <div className="previewContainer">
      <div className="previewCanvas">
        <div className="previewTile">
          {createdIcon && (
            <svg
              viewBox="0 0 256 256"
              width="50"
              height="50"
              key={selectedIcon}
              dangerouslySetInnerHTML={{ __html: createdIcon }}
            />
          )}
        </div>
      </div>
      <div className="previewDetails">
        <h4>{title.toUpperCase()}</h4>
        <h2>{displayName}</h2>
        <div className="iconSize">
          {
            [96, 48, 32].map(size => (
              <div key={size}>
                <div className="previewTile" style={{ '--size': `${size}px` }}>
                  <IconSVG body={createdIcon} key={selectedIcon} />
                </div>
                <p>{size} px</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}