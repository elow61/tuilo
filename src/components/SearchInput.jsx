export default function SearchInput({ onValueChange }) {
  return (
    <>
      <input
        name="search"
        type="text"
        placeholder="calendar"
        id="search"
        onChange={(e) => onValueChange(e)}/>
    </>
  )
}
