import { useTuilo } from '../../hooks/useTuilo.js'
import IconSVG from '../../components/IconSVG/IconSVG.jsx'
import { displayName } from '../../lib/iconName.js'
import './IconPreview.css'

const SIZES = [96, 48, 32]

export default function IconPreview({ title }) {
  const { createdIcon, selectedIcon } = useTuilo()

  return (
    <div className="previewContainer">
      <div className="previewCanvas">
        <div className="previewTile">
          <IconSVG body={createdIcon} key={selectedIcon} />
        </div>
      </div>
      <div className="previewDetails">
        <h4>{title.toUpperCase()}</h4>
        <h2>{displayName(selectedIcon)}</h2>
        <div className="iconSize">
          {SIZES.map(size => (
            <div key={size}>
              <div className="previewTile" style={{ '--size': `${size}px` }}>
                <IconSVG body={createdIcon} key={selectedIcon} />
              </div>
              <p>{size} px</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
