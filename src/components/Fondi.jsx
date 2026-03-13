import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const fondi = [
  'UniSalute', 'CASPIE', 'My Assistance', 'MetaSalute',
  'Blue Assistance', 'OdontoNetwork', 'Previmedical', 'AON', 'PACARD',
]

const faqs = [
  { q: 'Come faccio a sapere se il mio fondo è convenzionato?', a: 'Contattaci indicando il nome del tuo fondo. Verificheremo immediatamente la copertura e ti guideremo nella procedura.' },
  { q: 'Devo anticipare i costi delle cure?', a: 'No. Per i fondi convenzionati gestiamo la fatturazione diretta. Non dovrai anticipare nulla per le prestazioni coperte.' },
  { q: 'Il mio fondo non è in elenco?', a: 'Contattaci e verificheremo la possibilità di convenzionamento. Ci attiviamo per estendere continuamente la nostra rete.' },
  { q: 'Chi gestisce le pratiche burocratiche?', a: 'Ce ne occupiamo noi al 100%. Dalla verifica alla liquidazione. Tu devi solo pensare a sorridere.' },
]

export default function Fondi() {
  const sectionRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.fondi-label', { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.8,
        scrollTrigger: { trigger: '.fondi-label', start: 'top 85%' }
      })

      gsap.fromTo('.fondi-heading span', { y: '100%' }, {
        y: '0%', duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.fondi-heading', start: 'top 80%' }
      })

      // Marquee — no trigger needed, continuous
      gsap.fromTo('.fondi-marquee-inner', { xPercent: 0 }, {
        xPercent: -50, duration: 25, ease: 'none', repeat: -1,
      })

      gsap.fromTo('.fondi-step', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.2,
        scrollTrigger: { trigger: '.fondi-steps', start: 'top 80%' }
      })

      gsap.fromTo('.fondi-faq', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: '.fondi-faqs', start: 'top 80%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="fondi" className="relative bg-[var(--off-white)] overflow-hidden" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
      <div className="px-6 md:px-10 lg:px-16">
        <div className="fondi-label font-mono text-[11px] text-[var(--gray)] uppercase tracking-[0.3em] mb-6" style={{ opacity: 0 }}>
          ( 06 ) — Fondi Sanitari
        </div>

        <div className="fondi-heading max-w-6xl mb-8 lg:mb-12">
          <h2 className="font-serif text-fluid-display leading-[0.95] text-[var(--ink)]">
            <span className="line-wrap"><span className="block">Convenzionati con i</span></span>
            <span className="line-wrap"><span className="block italic text-[var(--blue)]">principali fondi</span></span>
          </h2>
        </div>

        <p className="text-[var(--gray)] text-fluid-lg max-w-2xl mb-16 leading-relaxed">
          Se hai una copertura sanitaria integrativa, puoi usarla direttamente da noi.
          Facciamo tutto noi: dalla verifica al caricamento pratiche. <strong className="text-[var(--ink)]">Nessun anticipo, nessuna burocrazia.</strong>
        </p>
      </div>

      {/* Marquee — full width, continuous scroll */}
      <div className="overflow-hidden mb-16 lg:mb-24 border-y border-black/5 py-6">
        <div className="fondi-marquee-inner flex gap-12 whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...fondi, ...fondi, ...fondi, ...fondi].map((fondo, i) => (
            <span key={i} className="font-serif text-fluid-3xl text-[var(--ink)] opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default">
              {fondo}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-10 lg:px-16">
        {/* How it works — 3 steps, asymmetric */}
        <div className="fondi-steps lg:grid lg:grid-cols-12 lg:gap-8 mb-20 lg:mb-28">
          <div className="lg:col-span-3 mb-8 lg:mb-0">
            <span className="font-mono text-[11px] text-[var(--gray)] uppercase tracking-widest">Come funziona</span>
          </div>
          <div className="lg:col-span-8 lg:col-start-5 grid sm:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Indica il tuo fondo', desc: 'Dicci il nome del fondo sanitario a cui sei iscritto.' },
              { num: '02', title: 'Verifichiamo tutto', desc: 'Ti diciamo come accedere e cosa è coperto dal tuo piano.' },
              { num: '03', title: 'Gestiamo noi', desc: 'Carichiamo le pratiche e la burocrazia. Nessun anticipo.' },
            ].map((step) => (
              <div key={step.num} className="fondi-step" style={{ opacity: 0 }}>
                <span className="font-mono text-fluid-3xl text-[var(--blue)] font-bold block mb-3">{step.num}</span>
                <h4 className="font-serif text-fluid-xl text-[var(--ink)] mb-2">{step.title}</h4>
                <p className="text-[var(--gray)] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ — left-right asymmetric */}
        <div className="fondi-faqs lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3 mb-8 lg:mb-0">
            <span className="font-mono text-[11px] text-[var(--gray)] uppercase tracking-widest">Domande frequenti</span>
          </div>
          <div className="lg:col-span-7 lg:col-start-5 space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="fondi-faq border-b border-black/10" style={{ opacity: 0 }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="font-serif text-fluid-lg text-[var(--ink)] pr-8 group-hover:text-[var(--blue)] transition-colors">{faq.q}</span>
                  <span className={`text-[var(--gray)] shrink-0 text-xl transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                  <p className="text-[var(--gray)] text-fluid-base leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA for unlisted funds */}
        <div className="mt-16 lg:mt-20 lg:ml-[33.333%]">
          <p className="text-[var(--gray)] text-fluid-base mb-4">Il tuo fondo non è in elenco?</p>
          <a
            href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20verificare%20se%20il%20mio%20fondo%20sanitario%20%C3%A8%20convenzionato%20con%20MG%20Dental."
            target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-4"
          >
            <span className="w-12 h-12 rounded-full bg-[var(--ink)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>
            <span className="text-[var(--ink)] text-fluid-lg font-light tracking-wide">Verifica la tua copertura</span>
          </a>
        </div>
      </div>
    </section>
  )
}
