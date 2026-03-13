import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import clinicExterior from '../assets/foto/foto-12.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const badgesRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { clipPath: 'inset(0 100% 0 0)', scale: 1.15 },
        { clipPath: 'inset(0 0% 0 0)', scale: 1, duration: 1.8, delay: 0.3, ease: 'power4.inOut' }
      )

      const titleLines = titleRef.current.querySelectorAll('.hero-line')
      gsap.fromTo(titleLines,
        { y: '110%', rotate: 3 },
        { y: '0%', rotate: 0, duration: 1.2, stagger: 0.12, delay: 0.6, ease: 'power3.out' }
      )

      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 1.3, ease: 'power2.out' }
      )

      const badges = badgesRef.current.children
      gsap.fromTo(badges,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 1.6, ease: 'power2.out' }
      )

      gsap.fromTo(ctaRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, delay: 2, ease: 'power2.out' }
      )

      gsap.to(imageRef.current.querySelector('img'), {
        yPercent: 12, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 0.8 }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen overflow-hidden bg-[var(--cream)]">
      <div className="relative min-h-screen flex flex-col lg:flex-row">
        <div className="relative z-10 flex flex-col justify-end lg:justify-center px-6 md:px-10 lg:px-16 pt-32 pb-12 lg:pb-0 lg:w-[55%]">
          <div ref={subtitleRef} className="mb-8" style={{ opacity: 0 }}>
            <span className="font-mono text-[var(--gray)] text-[11px] uppercase tracking-[0.25em]">
              Studio Dentistico — Castelvetro Piacentino
            </span>
          </div>

          <h1 ref={titleRef} className="mb-8 lg:mb-12">
            <span className="line-wrap">
              <span className="hero-line font-serif text-fluid-hero leading-[1] tracking-[-0.03em] text-[var(--ink)] block">Scegli di</span>
            </span>
            <span className="line-wrap">
              <span className="hero-line font-serif italic text-fluid-hero leading-[1] tracking-[-0.03em] text-[var(--blue)] block">vivere</span>
            </span>
            <span className="line-wrap">
              <span className="hero-line font-serif text-fluid-hero leading-[1] tracking-[-0.03em] text-[var(--ink)] block">sorridendo</span>
            </span>
          </h1>

          <div ref={badgesRef} className="flex flex-wrap gap-3 lg:gap-4 max-w-lg">
            {['Prima visita gratuita', 'Tasso zero', 'Fondi convenzionati', 'TAC 3D digitale'].map((badge) => (
              <span key={badge} className="font-mono text-[10px] sm:text-[11px] text-[var(--gray)] uppercase tracking-wider border border-black/10 rounded-full px-4 py-2">
                {badge}
              </span>
            ))}
          </div>

          <div ref={ctaRef} className="mt-12 lg:mt-16" style={{ opacity: 0 }}>
            <a
              href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20prenotare%20una%20prima%20visita%20presso%20MG%20Dental."
              target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-4"
            >
              <span className="w-14 h-14 rounded-full bg-[var(--ink)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
              <span className="text-[var(--ink)] text-fluid-lg font-light tracking-wide group-hover:tracking-wider transition-all duration-500">
                Prenota la tua visita
              </span>
            </a>
          </div>
        </div>

        <div className="lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[50%] overflow-hidden">
          <div ref={imageRef} className="w-full h-[50vh] lg:h-full" style={{ clipPath: 'inset(0 100% 0 0)' }}>
            <img src={clinicExterior} alt="Clinica MG Dental" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 md:left-10 z-10 flex items-center gap-3">
        <div className="w-[1px] h-12 bg-black/20 overflow-hidden">
          <div className="w-full h-full bg-black" style={{ animation: 'slideDown 2s ease-in-out infinite' }} />
        </div>
        <span className="font-mono text-[10px] text-[var(--gray)] uppercase tracking-[0.2em]">Scorri</span>
      </div>

      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  )
}
