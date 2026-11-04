import {fakeApp} from "../data/fakeApp.jsx";
import {useTuilo} from "../contexts/TuiloContext.jsx";
import IconSVG from "./IconSVG.jsx";

export default function BackgroundApp({ mode }) {

  const { createdIcon, selectedIcon } = useTuilo()
  const displayName = selectedIcon && selectedIcon.replace('-duotone', '');

  return (
    <div className={`background-home home-bg-${mode}`}>
      <div className="previewAppContainer">
        <div className="appContainer userApp">
          <div className="appTile">
            <IconSVG body={createdIcon} />
          </div>
          <span>{displayName || 'My app'}</span>
        </div>
        {
          fakeApp.map(app => (
            <div className="appContainer" key={app.id}>
              <div className="appTile">
                <div className="previewApp" style={{ '--bg-fake-app': app.color }}></div>
              </div>
              <span>{app.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
