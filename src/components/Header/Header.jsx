import logo from '../../assets/logo.svg'
import './Header.css'

export default function Header({ title, summary }) {
  return (
    <header className="app-header">
      <div className="app-header__title">
        <img src={logo} width="45" height="45" alt="Logo" />
        <h1><a href={import.meta.env.BASE_URL}>{title}</a></h1>
        <h3>{summary}</h3>
      </div>

      <nav className="app-header__nav">
        <ul>
          <li className="app-header__credits">Icons by <a href="https://phosphoricons.com" target="_blank" rel="noreferrer">Phosphor</a></li>
          <li><a href="https://github.com/elow61/tuilo" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </nav>
    </header>
  )
}
