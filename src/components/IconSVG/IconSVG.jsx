export default function IconSVG({ body, size = 50 }) {
  if (!body) return null

  return (
    <svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  )
}
