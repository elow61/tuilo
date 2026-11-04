import DuoColorCard from "./DuoColorCard.jsx";
import PickupColor from "./PickupColor.jsx";
import {useTuilo} from "../contexts/TuiloContext.jsx";
import {duoPallets} from "../data/duoColorPallets.jsx";

export default function ColorPallet() {

  const { selectedColors } = useTuilo();
  const hexaPrimary = selectedColors.primary
  const hexaSecondary = selectedColors.secondary

  return (
    <>
      <div className="mainColors">
        <PickupColor hexaColor={hexaPrimary} levelTitle="Primary" />
        <PickupColor hexaColor={hexaSecondary} levelTitle="Secondary"/>
      </div>
      <div className="palletColor">
        <p>Suggested duos</p>
        {
          duoPallets.map(duo => (
            <DuoColorCard
              selectedColors={duo}
              selected={duo.primary === selectedColors.primary && duo.secondary === selectedColors.secondary}
              primary={duo.primary}
              secondary={duo.secondary}
              key={duo.id}/>
          ))
        }
      </div>
    </>
  );
}
