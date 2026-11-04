import DuoSwatch from './DuoSwatch.jsx'
import ColorPicker from './ColorPicker.jsx'
import { useTuilo } from '../../hooks/useTuilo.js'
import { duoPalettes } from '../../data/duoPalettes.js'
import './ColorPalette.css'

export default function ColorPalette() {
  const { selectedColors } = useTuilo()

  return (
    <>
      <div className="mainColors">
        <ColorPicker hexaColor={selectedColors.primary} level='primary' levelTitle="Primary" />
        <ColorPicker hexaColor={selectedColors.secondary} level='secondary' levelTitle="Secondary" />
      </div>
      <div className="palletColor">
        <p>Suggested duos</p>
        {duoPalettes.map(duo => (
          <DuoSwatch
            key={duo.id}
            duo={duo}
            selected={duo.primary === selectedColors.primary && duo.secondary === selectedColors.secondary}
          />
        ))}
      </div>
    </>
  )
}
