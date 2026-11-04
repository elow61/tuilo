import ButtonModeToggle from './ButtonModeToggle.jsx'
import HomeScreen from './HomeScreen.jsx'
import { useTuilo } from '../../hooks/useTuilo.js'
import './HomeScreenPreview.css'

export default function HomeScreenPreview({ title }) {
  const { mode } = useTuilo()

  return (
    <>
      <div className="headerMode">
        <h4>{title.toUpperCase()}</h4>
        <div className="buttonChangeMode">
          <ButtonModeToggle value='dark'/>
          <ButtonModeToggle value='light'/>
        </div>
      </div>
      <HomeScreen mode={mode}/>
    </>
  )
}
