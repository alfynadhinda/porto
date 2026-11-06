import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { profile } from '../data.js'

const links = [
  ['Tentang', '#tentang'],
  ['Project', '#project'],
  ['Layanan', '#layanan'],
  ['Kontak', '#kontak'],
]

export default function Navbar() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      /* abaikan */
    }
  }

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3">
      <nav
        aria-label="Navigasi utama"
        className={`flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border border-line px-2 py-2 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? 'bg-card/80 shadow-oneui' : 'bg-card/50'
        }`}
      >
        <a href="#" className="flex items-center gap-2 pl-2 pr-1 font-bold tracking-tight">
          <span className="grid size-8 place-items-center rounded-full bg-accent text-xs text-accentink">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-card2 hover:text-ink"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            onClick={toggle}
            aria-label={dark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
            className="grid size-10 place-items-center rounded-full bg-card2 text-ink transition hover:scale-105 active:scale-95"
          >
            <Icon name={dark ? 'sun' : 'moon'} />
          </button>
          <a
            href="#kontak"
            className="rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accentink transition hover:opacity-90 active:scale-95"
          >
            Hire me
          </a>
        </div>
      </nav>
    </header>
  )
}
