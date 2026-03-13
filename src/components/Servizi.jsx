import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import img1 from '../assets/foto/foto-1.webp'
import img2 from '../assets/foto/foto-2.webp'
import img3 from '../assets/foto/foto-3.webp'
import img4 from '../assets/foto/foto-4.webp'
import img5 from '../assets/foto/foto-5.webp'
import img6 from '../assets/foto/foto-6.webp'
import img7 from '../assets/foto/foto-7.webp'
import img8 from '../assets/foto/foto-8.webp'
import img9 from '../assets/foto/foto-9.webp'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { num: '01', title: 'Implantologia e Chirurgia Orale', desc: 'Impianti singoli, multipli, Toronto Bridge, carico immediato, chirurgia guidata digitale, estrazioni complesse.', img: img1 },
  { num: '02', title: 'Endodonzia', desc: 'Devitalizzazioni e ritrattamenti canalari, anche casi complessi. Punto di riferimento per colleghi della zona.', img: img2 },
  { num: '03', title: 'Igiene e Prevenzione', desc: 'Sedute di igiene professionale, programmi di prevenzione personalizzati per mantenere il tuo sorriso sano.', img: img3 },
  { num: '04', title: 'Otturazioni e Conservativa', desc: 'Odontoiatria conservativa e ricostruzioni estetiche con materiali di ultima generazione.', img: img4 },
  { num: '05', title: 'Protesi Mobile e Fissa', desc: 'Protesi su impianti, protesi tradizionali, corone e ponti per funzionalità ed estetica.', img: img5 },
  { num: '06', title: 'Ortodonzia Tradizionale', desc: 'Apparecchi fissi per bambini e adulti, terapie intercettive per correggere le malocclusioni.', img: img6 },
  { num: '07', title: 'Invisalign — Ortodonzia Invisibile', desc: 'Allineatori trasparenti, Diamond Provider. Trattamenti personalizzati per ogni età.', img: img7 },
  { num: '08', title: 'Estetica Dentale', desc: 'Faccette personalizzate, sbiancamenti, trattamenti minimamente invasivi, dermal filler.', img: img8 },
  { num: '09', title: 'Gnatologia', desc: 'Disturbi ATM, bruxismo, acufeni, OSAS, dispositivi avanzamento mandibolare (MAD).', img: img9 },
]

export default function Servizi() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const imgInnerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.serv-label', { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.8,
        scrollTrigger: { trigger: '.serv-label', start: 'top 85%' }
      })

      gsap.fromTo('.serv-heading span', { y: '100%' }, {
        y: '0%', duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.serv-heading', start: 'top 80%' }
      })

      document.querySelectorAll('.serv-item').forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1, x: 0, duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 85%' }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Floating image follows mouse
  useEffect(() => {
    const container = sectionRef.current
    const image = imageRef.current
    if (!container || !image) return

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      gsap.to(image, {
        x: x - 160,
        y: y - 100,
        duration: 0.6,
        ease: 'power3.out',
      })
    }

    container.addEventListener('mousemove', onMouseMove)
    return () => container.removeEventListener('mousemove', onMouseMove)
  }, [])

  // Show/hide image on hover
  useEffect(() => {
    const image = imageRef.current
    if (!image) return

    if (activeIndex >= 0) {
      gsap.to(image, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' })
    } else {
      gsap.to(image, { opacity: 0, scale: 0.9, duration: 0.3, ease: 'power2.in' })
    }
  }, [activeIndex])

  return (
    <section ref={sectionRef} id="servizi" className="relative bg-[var(--off-white)] overflow-hidden" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
      {/* Floating hover image (desktop only) */}
      <div
        ref={imageRef}
        className="absolute z-20 pointer-events-none hidden lg:block rounded-xl overflow-hidden shadow-2xl"
        style={{ width: 320, height: 200, opacity: 0, transform: 'scale(0.9)' }}
      >
        {services.map((service, i) => (
          <img
            key={service.num}
            ref={i === 0 ? imgInnerRef : undefined}
            src={service.img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: activeIndex === i ? 1 : 0 }}
          />
        ))}
      </div>

      <div className="px-6 md:px-10 lg:px-16">
        <div className="serv-label font-mono text-[11px] text-[var(--gray)] uppercase tracking-[0.3em] mb-6" style={{ opacity: 0 }}>
          ( 03 ) — Servizi
        </div>

        <div className="serv-heading max-w-5xl mb-16 lg:mb-24">
          <h2 className="font-serif text-fluid-display leading-[0.95] text-[var(--ink)]">
            <span className="line-wrap"><span className="block">Cure complete</span></span>
            <span className="line-wrap"><span className="block">per ogni <span className="italic text-[var(--blue)]">esigenza</span></span></span>
          </h2>
        </div>

        {/* Services as a list */}
        <div className="max-w-5xl ml-auto">
          {services.map((service, i) => (
            <div
              key={service.num}
              className="serv-item group border-t border-black/10 py-8 lg:py-10 lg:grid lg:grid-cols-12 lg:gap-6 items-start"
              style={{ opacity: 0 }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              <div className="lg:col-span-1">
                <span className="font-mono text-[var(--text-xs)] text-[var(--gray-light)] group-hover:text-[var(--blue)] transition-colors duration-300">{service.num}</span>
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-serif text-fluid-2xl text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors duration-500 leading-tight group-hover:translate-x-3 transform transition-transform duration-500">
                  {service.title}
                </h3>
              </div>
              <div className="lg:col-span-5 mt-3 lg:mt-0">
                <p className="text-[var(--gray)] text-fluid-base leading-relaxed">{service.desc}</p>
              </div>
              <div className="lg:col-span-1 mt-3 lg:mt-0 flex lg:justify-end">
                <a
                  href={`https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20informazioni%20su%3A%20${encodeURIComponent(service.title)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 transform"
                >
                  <svg className="w-5 h-5 text-[var(--ink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
          {/* Final border */}
          <div className="border-t border-black/10" />
        </div>

        {/* CTA */}
        <div className="mt-16 lg:mt-20 lg:ml-[8.333%]">
          <a
            href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20prenotare%20una%20consulenza%20presso%20MG%20Dental."
            target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-4"
          >
            <span className="w-14 h-14 rounded-full bg-[var(--blue)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>
            <span className="text-[var(--ink)] text-fluid-lg font-light tracking-wide">Prenota una consulenza</span>
          </a>
        </div>
      </div>
    </section>
  )
}
