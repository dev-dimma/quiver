import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logoFlame from '../assets/logo-flame.png'
import Button from './Button'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#mission', label: 'Mission' },
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
          scrolled ? 'bg-[#2e0a28]/92 backdrop-blur-md py-3.5 shadow-lg' : 'py-5.5'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={logoFlame} alt="Quiver flame mark" className="h-7.5 w-auto" />
            <span className="text-white font-bold text-xl tracking-tight">Quiver</span>
          </div>

          <ul className="hidden md:flex gap-11 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-white/80 text-sm font-medium tracking-wide pb-1 transition-colors hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-pink after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <Button href="#download" className="hidden md:inline-flex px-5.5 py-2.5 text-sm">
            Download
          </Button>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1.5"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <span className="w-6 h-0.5 bg-white rounded-full" />
            <span className="w-6 h-0.5 bg-white rounded-full" />
            <span className="w-6 h-0.5 bg-white rounded-full" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-150"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 w-[78%] max-w-85 h-screen z-200 flex flex-col gap-7 px-9 pt-25 pb-10 bg-linear-to-br from-maroon-dark to-purple-panel-deep"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            >
              <button
                className="absolute top-6.5 right-7 text-white text-2xl"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                &times;
              </button>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white text-lg font-medium"
                >
                  {l.label}
                </a>
              ))}
              <Button
                href="#download"
                onClick={() => setOpen(false)}
                className="self-start mt-3 px-5.5 py-2.5 text-sm"
              >
                Download
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
