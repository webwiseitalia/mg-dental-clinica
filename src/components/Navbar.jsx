import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import logo from '../assets/logo.webp'

const navLinks = [
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Team', href: '#team' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Tecnologie', href: '#tecnologie' },
  { label: 'Fondi', href: '#fondi' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
    )
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50" style={{ opacity: 0 }}>
      <div className="flex items-center justify-between px-6 md:px-10 h-20 mx-4 md:mx-6 mt-3 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg shadow-black/[0.03]">
        <a href="#" className="flex items-center gap-3 relative z-50" style={{ isolation: 'isolate' }}>
          <img src={logo} alt="MG Dental" className="h-10 w-auto" />
          <span className="text-[var(--ink)] font-medium text-sm tracking-wide hidden sm:block">MG Dental</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-[var(--ink)] text-sm font-light tracking-wide"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20prenotare%20una%20prima%20visita%20presso%20MG%20Dental."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--ink)] text-sm font-light tracking-wide border border-black/20 rounded-full px-5 py-2 hover:bg-[var(--ink)] hover:text-white transition-all duration-500"
          >
            Prenota
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Menu"
        >
          <motion.span className="w-6 h-[1px] bg-[var(--ink)] block"
            animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span className="w-6 h-[1px] bg-[var(--ink)] block"
            animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[var(--ink)] z-40 flex items-center"
          >
            <div className="px-10 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-serif text-white text-4xl sm:text-5xl py-3 border-b border-white/10 hover:pl-4 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-10">
                <a
                  href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20prenotare%20una%20prima%20visita%20presso%20MG%20Dental."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-block text-white border border-white/30 rounded-full px-8 py-3 text-lg hover:bg-white hover:text-black transition-all duration-500"
                >
                  Prenota ora
                </a>
                <p className="text-white/40 text-sm mt-6 font-mono">0523 797093</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
