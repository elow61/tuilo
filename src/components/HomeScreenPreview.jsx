import ButtonChangeMode from "./ButtonChangeMode.jsx";
import BackgroundApp from "./BackgroundApp.jsx";
import {useTuilo} from "../contexts/TuiloContext.jsx";

export default function HomeScreenPreview({ title }) {

  const { mode } = useTuilo()
  console.log(mode)

  return (
    <>
      <div className="headerMode">
        <h4>{title.toUpperCase()}</h4>
        <div className="buttonChangeMode">
          <ButtonChangeMode defaultMode='dark'/>
          <ButtonChangeMode defaultMode='light'/>
        </div>
      </div>
      <BackgroundApp mode={mode}/>
    </>
  )
}
