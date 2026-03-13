import { useState, useEffect } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import logo from '../assets/logo.webp'

const navLinks = [
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Team', href: '#team' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Tecnologie', href: '#tecnologie' },
  { label: 'Fondi Sanitari', href: '#fondi' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="MG Dental logo" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <span className={`text-lg font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                MG Dental
              </span>
              <p className={`text-xs transition-colors duration-300 ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>
                Studio Dentistico
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary-600/10 ${
                  scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0523797093"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">0523 797093</span>
            </a>
            <a
              href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20prenotare%20una%20prima%20visita%20presso%20MG%20Dental."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40"
            >
              <MessageCircle className="w-4 h-4" />
              Prenota Visita
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white z-40 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-4 py-3 rounded-xl text-lg font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <hr className="my-4 border-gray-200" />
          <a
            href="tel:0523797093"
            className="flex items-center gap-3 text-gray-600 px-4 py-3 rounded-xl hover:bg-gray-50"
          >
            <Phone className="w-5 h-5" />
            <span>0523 797093</span>
          </a>
          <a
            href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20prenotare%20una%20prima%20visita%20presso%20MG%20Dental."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-4 rounded-xl text-lg font-semibold mt-2"
          >
            <MessageCircle className="w-5 h-5" />
            Prenota la tua Prima Visita
          </a>
        </div>
      </div>
    </nav>
  )
}
