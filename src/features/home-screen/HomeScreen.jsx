import { fakeApps } from '../../data/fakeApps.js'
import { useTuilo } from '../../hooks/useTuilo.js'
import IconSVG from '../../components/IconSVG/IconSVG.jsx'
import { displayName } from '../../lib/iconName.js'

export default function HomeScreen({ mode }) {
  const { createdIcon, selectedIcon } = useTuilo()

  return (
    <div className={`background-home home-bg-${mode}`}>
      <div className="previewAppContainer">
        <div className="appContainer userApp">
          <div className="appTile">
            <IconSVG body={createdIcon} />
          </div>
          <span>{displayName(selectedIcon) || 'My app'}</span>
        </div>
        {fakeApps.map(app => (
          <div className="appContainer" key={app.id}>
            <div className="appTile">
              <div className="previewApp" style={{ '--bg-fake-app': app.color }}></div>
            </div>
            <span>{app.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
