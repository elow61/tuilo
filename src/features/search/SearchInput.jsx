import './SearchInput.css'

export default function SearchInput({ onValueChange }) {
  return (
    <input
      className="search-input"
      name="search"
      type="text"
      placeholder="calendar"
      id="search"
      onChange={(e) => onValueChange(e.target.value)}
    />
  )
}
