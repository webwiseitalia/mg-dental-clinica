import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticButton from './MagneticButton'
import logo from '../assets/logo.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-cta span', { y: '100%' }, {
        y: '0%', duration: 1.2, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.footer-cta', start: 'top 85%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={sectionRef} className="relative bg-[var(--ink)] text-white overflow-hidden">
      {/* Big CTA Section */}
      <div className="px-6 md:px-10 lg:px-16 text-center" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-xl)' }}>
        <div className="footer-cta max-w-5xl mx-auto">
          <h2 className="font-serif text-fluid-display leading-[0.95] mb-10">
            <span className="line-wrap"><span className="block">Il tuo sorriso merita</span></span>
            <span className="line-wrap"><span className="block italic text-[var(--cyan)]">un progetto</span></span>
            <span className="line-wrap"><span className="block">su misura</span></span>
          </h2>
        </div>

        <MagneticButton className="inline-block" strength={0.3}>
          <a
            href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20prenotare%20una%20prima%20visita%20presso%20MG%20Dental."
            target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-4"
          >
            <span className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
              <svg className="w-6 h-6 text-white group-hover:text-[var(--ink)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>
            <span className="text-white text-fluid-xl font-light tracking-wide">Prenota ora</span>
          </a>
        </MagneticButton>
      </div>

      {/* Divider */}
      <div className="mx-6 md:mx-10 lg:mx-16 border-t border-white/10" />

      {/* Footer grid — asymmetric */}
      <div className="px-6 md:px-10 lg:px-16 py-16 lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Brand — col 1-3 */}
        <div className="lg:col-span-3 mb-10 lg:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="MG Dental" className="h-8 w-auto" />
            <span className="text-lg font-medium">MG Dental</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-4">
            Studio dentistico a Castelvetro Piacentino. Cure d'eccellenza con tecnologie all'avanguardia.
          </p>
          <p className="text-white/25 text-xs">
            Dir. Sanitario: Dott. Marco Bosi<br />
            Odontoiatri PC n.330
          </p>
        </div>

        {/* Links — col 5-6 */}
        <div className="lg:col-span-2 lg:col-start-5 mb-10 lg:mb-0">
          <span className="font-mono text-[10px] text-white/25 uppercase tracking-widest block mb-4">Link</span>
          {['Chi Siamo', 'Team', 'Servizi', 'Tecnologie', 'Fondi Sanitari', 'Prima Visita', 'Contatti'].map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-').replace('fondi-sanitari', 'fondi').replace('prima-visita', 'prima-visita')}`}
              className="block text-white/40 hover:text-white text-sm py-1 transition-colors">{link}</a>
          ))}
        </div>

        {/* Services — col 7-8 */}
        <div className="lg:col-span-2 lg:col-start-7 mb-10 lg:mb-0">
          <span className="font-mono text-[10px] text-white/25 uppercase tracking-widest block mb-4">Servizi</span>
          {['Implantologia', 'Endodonzia', 'Invisalign', 'Estetica Dentale', 'Igiene', 'Gnatologia'].map(s => (
            <a key={s} href="#servizi" className="block text-white/40 hover:text-white text-sm py-1 transition-colors">{s}</a>
          ))}
        </div>

        {/* Contact — col 10-12 */}
        <div className="lg:col-span-3 lg:col-start-10">
          <span className="font-mono text-[10px] text-white/25 uppercase tracking-widest block mb-4">Contatti</span>
          <a href="tel:0523797093" className="block text-white/40 hover:text-white text-sm py-1 transition-colors">0523 797093</a>
          <a href="https://wa.me/3514163362" target="_blank" rel="noopener noreferrer" className="block text-white/40 hover:text-white text-sm py-1 transition-colors">351 416 3362</a>
          <a href="mailto:info@mgdental.it" className="block text-white/40 hover:text-white text-sm py-1 transition-colors">info@mgdental.it</a>
          <p className="text-white/30 text-sm py-1">Loc. Fornace 1, 29010 Castelvetro Piacentino (PC)</p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/mgdental_clinica/" target="_blank" rel="noopener noreferrer"
              className="text-white/30 hover:text-white text-sm transition-colors">Instagram</a>
            <a href="https://www.facebook.com/mgdentalclinica" target="_blank" rel="noopener noreferrer"
              className="text-white/30 hover:text-white text-sm transition-colors">Facebook</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-6 md:mx-10 lg:mx-16 border-t border-white/5" />
      <div className="px-6 md:px-10 lg:px-16 py-6 flex flex-col sm:flex-row justify-between gap-4">
        <p className="text-white/20 text-xs">© {new Date().getFullYear()} MG Dental — Tutti i diritti riservati.</p>
        <p className="text-white/20 text-xs">Dir. Sanitario: Dott. Marco Bosi — Odontoiatri PC n.330</p>
      </div>
    </footer>
  )
}
