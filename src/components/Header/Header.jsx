import logo from '../../assets/logo.svg'
import './Header.css'

export default function Header({ title, summary }) {
  return (
    <header className="app-header">
      <div className="app-header__title">
        <img src={logo} width="45" height="45" alt="Logo" />
        <h1>{title}</h1>
        <h3>{summary}</h3>
      </div>

      <nav className="app-header__nav">
        <ul>
          <li>Help</li>
          <li>GitHub</li>
        </ul>
      </nav>
    </header>
  )
}
