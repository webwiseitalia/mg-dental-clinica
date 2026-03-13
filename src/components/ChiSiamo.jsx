import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import clinicFacade from '../assets/foto/foto-13.webp'
import clinicInterior from '../assets/foto/foto-2.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ChiSiamo() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.chi-label', { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.8,
        scrollTrigger: { trigger: '.chi-label', start: 'top 85%' }
      })

      gsap.fromTo('.chi-heading span', { y: '100%' }, {
        y: '0%', duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.chi-heading', start: 'top 80%' }
      })

      gsap.to('.chi-img-main img', {
        yPercent: -8, ease: 'none',
        scrollTrigger: { trigger: '.chi-img-main', start: 'top bottom', end: 'bottom top', scrub: 0.6 }
      })

      gsap.fromTo('.chi-img-small',
        { clipPath: 'inset(0 0 0 100%)' },
        { clipPath: 'inset(0 0 0 0%)', duration: 1.2, ease: 'power4.inOut',
          scrollTrigger: { trigger: '.chi-img-small', start: 'top 75%' }
        }
      )

      gsap.fromTo('.chi-text', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.9, stagger: 0.2,
        scrollTrigger: { trigger: '.chi-text-wrap', start: 'top 75%' }
      })

      gsap.fromTo('.chi-quote', { opacity: 0, x: 60 }, {
        opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.chi-quote', start: 'top 80%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="chi-siamo" className="relative bg-[var(--cream)] overflow-hidden" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-xl)' }}>
      <div className="px-6 md:px-10 lg:px-16">
        <div className="chi-label font-mono text-[11px] text-[var(--gray)] uppercase tracking-[0.3em] mb-6" style={{ opacity: 0 }}>
          ( 01 ) — Chi Siamo
        </div>

        <div className="chi-heading max-w-4xl mb-16 lg:mb-24">
          <h2 className="font-serif text-fluid-display leading-[0.95] text-[var(--ink)]">
            <span className="line-wrap"><span className="block">La nostra</span></span>
            <span className="line-wrap"><span className="block italic text-[var(--blue)]">forza</span></span>
            <span className="line-wrap"><span className="block">è l'ascolto</span></span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-0 items-start">
          <div className="lg:col-span-7 lg:-ml-16 relative">
            <div className="chi-img-main overflow-hidden rounded-r-2xl lg:rounded-r-3xl">
              <img src={clinicFacade} alt="Ingresso clinica MG Dental" className="w-full h-[50vh] lg:h-[70vh] object-cover" />
            </div>
            <div className="absolute -bottom-6 right-6 lg:right-12 bg-[var(--ink)] text-white px-8 py-4 rounded-xl z-10">
              <p className="font-serif text-3xl italic">2023</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/50 mt-1">Fondazione</p>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:-mt-20 chi-text-wrap">
            <p className="chi-text text-fluid-base text-[var(--gray)] leading-relaxed mb-6" style={{ opacity: 0 }}>
              MG Dental nasce nel 2023 dall'esperienza e dalla visione di un team affiatato e altamente specializzato,
              con l'obiettivo di offrire cure odontoiatriche d'eccellenza in un ambiente moderno, accogliente e
              tecnologicamente avanzato.
            </p>
            <p className="chi-text text-fluid-base text-[var(--gray)] leading-relaxed mb-10" style={{ opacity: 0 }}>
              I fondatori hanno creato una realtà indipendente e trasparente, che mette il paziente al centro di ogni decisione clinica.
            </p>
            <a href="#team" className="chi-text inline-flex items-center gap-3 group" style={{ opacity: 0 }}>
              <span className="font-mono text-[11px] text-[var(--ink)] uppercase tracking-widest">Scopri il team</span>
              <span className="w-8 h-[1px] bg-[var(--ink)] group-hover:w-14 transition-all duration-500" />
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 mt-20 lg:mt-32 items-center gap-8">
          <div className="lg:col-span-5 lg:col-start-2">
            <blockquote className="chi-quote" style={{ opacity: 0 }}>
              <p className="font-serif italic text-fluid-3xl leading-[1.15] text-[var(--ink)]">
                "Ogni paziente ha una storia, e ogni sorriso merita un progetto su misura."
              </p>
              <footer className="mt-6 font-mono text-[11px] text-[var(--gray)] uppercase tracking-widest">
                — Filosofia MG Dental
              </footer>
            </blockquote>
          </div>

          <div className="lg:col-span-4 lg:col-start-8">
            <div className="chi-img-small overflow-hidden rounded-2xl" style={{ clipPath: 'inset(0 0 0 100%)' }}>
              <img src={clinicInterior} alt="Sala operatoria MG Dental" className="w-full h-[40vh] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
