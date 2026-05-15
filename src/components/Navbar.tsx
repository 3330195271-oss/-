import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const navLinks = [
  { label: '产品', href: '#products' },
  { label: '样片', href: '#gallery' },
  { label: '流程', href: '#steps' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (!isHome) {
      window.location.href = '/' + href
      return
    }
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-nav-bg)] backdrop-blur-xl border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight text-[var(--color-text)] no-underline">
          多米摄影
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {isHome && navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200 cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        {/* Mobile hamburger + theme */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center text-[var(--color-text)] cursor-pointer bg-transparent border-none"
            aria-label="菜单"
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 2 : -3 }}
              className="block w-5 h-[1.5px] bg-current absolute"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -2 : 3 }}
              className="block w-5 h-[1.5px] bg-current absolute"
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[var(--color-card)] border-b border-[var(--color-border)]"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {isHome && navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200 cursor-pointer bg-transparent border-none py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
