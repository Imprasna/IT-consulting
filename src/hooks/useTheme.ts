import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

export default function useTheme() {
  const getInitial = (): Theme => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
      if (stored === 'light' || stored === 'dark') return stored
    } catch (e) {
      /* ignore */
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }

  const [theme, setTheme] = useState<Theme>(getInitial)

  const applyTheme = useCallback((t: Theme) => {
    const root = document.documentElement

    // apply classes
    root.classList.remove(t === 'dark' ? 'light' : 'dark')
    root.classList.add(t)

    // short animated transition on toggle
    root.classList.add('theme-transition')
    window.setTimeout(() => root.classList.remove('theme-transition'), 400)

    try {
      localStorage.setItem(STORAGE_KEY, t)
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    applyTheme(theme)
  }, [theme, applyTheme])

  // ensure initial sync with system if user hasn't saved a preference
  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return // user preference wins
      } catch (e) {
        /* ignore */
      }
      setTheme(e.matches ? 'dark' : 'light')
    }

    const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
    if (mql && mql.addEventListener) mql.addEventListener('change', listener)
    return () => { if (mql && mql.removeEventListener) mql.removeEventListener('change', listener) }
  }, [])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])

  return { theme, setTheme, toggle, isDark: theme === 'dark' }
}
