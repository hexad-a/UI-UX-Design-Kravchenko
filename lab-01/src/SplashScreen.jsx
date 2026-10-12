import Logo from './Logo.jsx'
import { APP_INFO } from './appInfo.js'

export default function SplashScreen({ leaving }) {
  return (
    <main className={`splash ${leaving ? 'splash--leaving' : ''}`} aria-live="polite">
      <Logo className="splash-logo" />
      <p className="splash-tagline">{APP_INFO.tagline}</p>
      <div className="progress" role="progressbar" aria-label="Завантаження">
        <span className="progress-bar" />
      </div>
    </main>
  )
}
