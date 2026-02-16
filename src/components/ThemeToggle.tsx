import React from 'react'
import { Sun, Moon } from 'lucide-react'
import useTheme from '../hooks/useTheme'

const ThemeToggle: React.FC = () => {
  const { isDark, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-pressed={isDark}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="relative inline-flex items-center w-14 h-8 rounded-full p-1 transition-colors duration-300 bg-white/6 border border-cyan-500 dark:border-slate-600/30 hover:bg-white/10 dark:bg-slate-700/30"
    >
      <span
        className={`inline-block w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          isDark ? 'translate-x-6 bg-royal-gold text-primary' : 'translate-x-0 bg-white text-amber-400'
        }`}
      >
        {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      </span>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

export default ThemeToggle
