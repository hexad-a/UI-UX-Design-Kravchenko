import Logo from './Logo.jsx'
import { APP_INFO } from './appInfo.js'

export default function MainScreen({ theme, onToggleTheme }) {
  return (
    <main className="main">
      <header className="topbar">
        <Logo className="topbar-logo" />
        <button className="btn" onClick={onToggleTheme} aria-label="Перемкнути тему">
          {theme === 'dark' ? '☀ Світла' : '☾ Темна'}
        </button>
      </header>

      <section className="card about" aria-labelledby="about-title">
        <Logo withWordmark={false} className="about-mark" />
        <h1 id="about-title">Про застосунок</h1>
        <p className="lead">{APP_INFO.tagline}</p>

        <dl className="facts">
          <div><dt>Назва</dt><dd>{APP_INFO.name}</dd></div>
          <div><dt>Версія</dt><dd>{APP_INFO.version}</dd></div>
          <div><dt>Автор</dt><dd>{APP_INFO.author}</dd></div>
          <div><dt>Рік</dt><dd>{APP_INFO.year}</dd></div>
          <div><dt>Технології</dt><dd>{APP_INFO.stack}</dd></div>
        </dl>
      </section>

      <footer className="foot">
        © {APP_INFO.year} {APP_INFO.author} · НАУ «ХАІ», каф. 603 · UI/UX дизайн
      </footer>
    </main>
  )
}
