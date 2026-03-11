import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'
import siteConfig from '../siteConfig'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#3E1C00]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#F5A623]">
            <img src="/logo.jpg" alt="Arte del Pan" className="w-full h-full object-cover" />
          </div>
          <span
            className="font-heading text-lg font-bold text-[#F5A623] leading-tight"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Arte del Pan
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-[#F5A623] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#2ECC71] hover:bg-[#27AE60] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            <FaWhatsapp size={14} />
            WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#3E1C00]/98 backdrop-blur-md border-t border-[#F5A623]/20 px-4 pb-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-white/80 hover:text-[#F5A623] transition-colors border-b border-white/10 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-3 bg-[#2ECC71] text-white py-3 rounded-full font-semibold"
            >
              <FaWhatsapp size={16} />
              Escríbenos por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
