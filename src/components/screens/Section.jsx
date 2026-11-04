export default function Section({title, children}) {
  return (
    <section className="section-search">
      <h4>{title.toUpperCase()}</h4>
      {children}
    </section>
  )
}
