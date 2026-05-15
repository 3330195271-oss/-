import { motion } from 'framer-motion'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="relative w-10 h-10 flex items-center justify-center rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-300 cursor-pointer"
      aria-label={theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
    >
      <motion.span
        key={theme}
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 90 }}
        transition={{ duration: 0.2 }}
        className="text-xl"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </motion.span>
    </button>
  )
}
