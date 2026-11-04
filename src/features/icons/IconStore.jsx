import IconCard from './IconCard.jsx'
import './IconStore.css'

export default function IconStore({ iconNames }) {
  return (
    <div className="iconStore">
      {iconNames.map(name => (
        <IconCard key={name} name={name} />
      ))}
    </div>
  )
}
