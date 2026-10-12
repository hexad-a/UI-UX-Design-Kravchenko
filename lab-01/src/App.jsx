import { useEffect, useState } from 'react'
import SplashScreen from './SplashScreen.jsx'
import MainScreen from './MainScreen.jsx'
import { SPLASH_DURATION_MS } from './appInfo.js'

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Імітація реальної ініціалізації застосунку (завантаження налаштувань тощо).
async function initializeApp() {
  await wait(SPLASH_DURATION_MS)
}

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
  } catch { /* storage може бути недоступним */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [screen, setScreen] = useState('splash') // 'splash' | 'main'
  const [leaving, setLeaving] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])

  // Неблокуючий перехід: async/await, без Thread.Sleep-подібних очікувань.
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      await initializeApp()
      if (cancelled) return
      setLeaving(true)   // плавне згасання заставки
      await wait(400)
      if (!cancelled) setScreen('main')
    })()
    return () => { cancelled = true }
  }, [])

  return screen === 'splash' ? (
    <SplashScreen leaving={leaving} />
  ) : (
    <MainScreen
      theme={theme}
      onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
    />
  )
}
