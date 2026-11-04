export default function IconSVG({ body, key }) {
  return (
    body && (
      <svg
        viewBox="0 0 256 256"
        width="50"
        height="50"
        key={key}
        dangerouslySetInnerHTML={{ __html: body }}
      />
    )
  )
}
