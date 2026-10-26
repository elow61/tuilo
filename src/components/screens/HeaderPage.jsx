import logo from '../../assets/logo.svg'

export default function HeaderPage({title, summary}) {
  return (
    <header>
      <div className="App-header__title">
        <img src={logo} width="45" height="45" alt="Logo" />
        <h1>{title}</h1>
        <h3>{summary}</h3>
      </div>

      <nav>
        <ul>
          <li>Help</li>
          <li>GitHub</li>
        </ul>
      </nav>
    </header>
  )
}
