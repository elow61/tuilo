export default function Section({title, children}) {
  return (
    <section className="section-search">
      <h4>{title}</h4>
      {children}
    </section>
  )
}
