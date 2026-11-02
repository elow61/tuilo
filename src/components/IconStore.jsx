import IconCard from "./IconCard.jsx";
import {useTuilo} from "../contexts/TuiloContext.jsx";

export default function IconStore({iconNames}) {

  const { selectedIcon, setSelectedIcon } = useTuilo()
  return (
    <div className="iconStore">
      {
        iconNames.map(name => (
          <IconCard key={name} name={name} setSelectedIcon={setSelectedIcon} />
        ))
      }
    </div>
  )
}
