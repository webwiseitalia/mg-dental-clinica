import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import fotoTreatment from '../assets/foto/foto-6.webp'

gsap.registerPlugin(ScrollTrigger)

export default function PrimaVisita() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pv-label', { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.8,
        scrollTrigger: { trigger: '.pv-label', start: 'top 85%' }
      })

      gsap.fromTo('.pv-heading span', { y: '100%' }, {
        y: '0%', duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.pv-heading', start: 'top 80%' }
      })

      gsap.fromTo('.pv-img', { clipPath: 'inset(0 100% 0 0)' }, {
        clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.pv-img', start: 'top 75%' }
      })

      gsap.fromTo('.pv-step', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15,
        scrollTrigger: { trigger: '.pv-steps', start: 'top 80%' }
      })

      gsap.fromTo('.pv-finance', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.9,
        scrollTrigger: { trigger: '.pv-finance', start: 'top 80%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="prima-visita" className="relative bg-[var(--cream)] overflow-hidden" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
      <div className="px-6 md:px-10 lg:px-16">
        <div className="pv-label font-mono text-[11px] text-[var(--gray)] uppercase tracking-[0.3em] mb-6" style={{ opacity: 0 }}>
          ( 05 ) — Prima Visita
        </div>

        {/* Large headline — dramatic */}
        <div className="pv-heading max-w-6xl mb-16 lg:mb-20">
          <h2 className="font-serif text-fluid-display leading-[0.95] text-[var(--ink)]">
            <span className="line-wrap"><span className="block">La tua prima visita è</span></span>
            <span className="line-wrap"><span className="block italic text-[var(--blue)]">senza impegno</span></span>
          </h2>
        </div>

        {/* Asymmetric layout */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
          {/* Image — right side, pulled up */}
          <div className="lg:col-span-5 lg:col-start-8 lg:-mt-8 mb-12 lg:mb-0 lg:order-2">
            <div className="pv-img overflow-hidden rounded-2xl" style={{ clipPath: 'inset(0 100% 0 0)' }}>
              <img src={fotoTreatment} alt="Trattamento dentale" className="w-full h-[45vh] lg:h-[60vh] object-cover" />
            </div>
          </div>

          {/* Content — left */}
          <div className="lg:col-span-6 lg:order-1">
            <p className="text-[var(--gray)] text-fluid-lg leading-relaxed mb-12 max-w-lg">
              La prima visita è il punto di partenza del tuo percorso con noi. L'obiettivo è offrirti una cura
              trasparente, costruita intorno alle tue reali esigenze.
            </p>

            {/* Steps — vertical, not cards */}
            <div className="pv-steps space-y-8 mb-16">
              {[
                { num: '01', title: 'Valutazione clinica completa', desc: 'Esame approfondito della tua situazione orale con le nostre tecnologie diagnostiche.' },
                { num: '02', title: 'Esami diagnostici', desc: 'Radiografie e scansioni digitali per una diagnosi precisa e sicura.' },
                { num: '03', title: 'Preventivo personalizzato', desc: 'Piano di cura dettagliato, chiaro e trasparente. Senza sorprese.' },
              ].map((step) => (
                <div key={step.num} className="pv-step flex gap-6" style={{ opacity: 0 }}>
                  <span className="font-mono text-fluid-3xl text-[var(--blue)] font-bold leading-none shrink-0">{step.num}</span>
                  <div>
                    <h4 className="font-serif text-fluid-xl text-[var(--ink)] mb-1">{step.title}</h4>
                    <p className="text-[var(--gray)] text-fluid-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Financing — dark card, offset */}
            <div className="pv-finance bg-[var(--ink)] text-white rounded-2xl p-8 lg:p-10 lg:-mr-20 relative z-10" style={{ opacity: 0 }}>
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Pagamenti e Finanziamenti</span>
              <h3 className="font-serif text-fluid-2xl mt-3 mb-6">Soluzioni flessibili</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  'Rateizzazione fino a 84 mesi',
                  'Tasso zero fino a 12 mesi',
                  'Nessun anticipo richiesto',
                  'Risposta rapida in clinica',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--cyan)] rounded-full shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {['Carte', 'Bancomat', 'Bonifico', 'Satispay', 'Apple Pay', 'Google Pay'].map((m) => (
                  <span key={m} className="text-[10px] font-mono uppercase tracking-wider text-white/30 border border-white/10 rounded-full px-3 py-1">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 lg:mt-24 text-center lg:text-left lg:ml-[8.333%]">
          <a
            href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20prenotare%20una%20prima%20visita%20senza%20impegno%20presso%20MG%20Dental."
            target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-4"
          >
            <span className="w-14 h-14 rounded-full bg-[var(--blue)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>
            <span className="text-[var(--ink)] text-fluid-lg font-light tracking-wide">Prenota la tua prima visita</span>
          </a>
        </div>
      </div>
    </section>
  )
}
