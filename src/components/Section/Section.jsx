import './Section.css'

export default function Section({ title, children }) {
  return (
    <section className="section">
      {title && <h4>{title.toUpperCase()}</h4>}
      {children}
    </section>
  )
}
