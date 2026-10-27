import ph from '@iconify-json/ph/icons.json'

export default function IconCard({name}) {

  const displayName = name.replace('-duotone', '');

  return (
    <div className="iconCard">
      <svg
        viewBox="0 0 256 256"
        width="50"
        height="50"
        key={name}
        dangerouslySetInnerHTML={{ __html: ph.icons[name].body }}
      />
      <p>{displayName}</p>
    </div>
  )
}
