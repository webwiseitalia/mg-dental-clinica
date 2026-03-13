import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import fotoDigitale from '../assets/foto/foto-7.webp'
import fotoSurgery from '../assets/foto/foto-4.webp'
import fotoXray from '../assets/foto/foto-3.webp'

gsap.registerPlugin(ScrollTrigger)

const techs = [
  { title: 'TAC 3D', desc: 'Diagnostica tridimensionale per una pianificazione precisa degli interventi chirurgici.' },
  { title: 'Scanner Intraorale', desc: 'Impronte digitali senza pasta, per il massimo comfort e precisione millimetrica.' },
  { title: 'Radiologia Digitale', desc: 'Immagini dettagliate a bassa dose per diagnosi accurate e sicure.' },
  { title: 'Chirurgia Guidata', desc: 'Progettazione digitale per massima precisione e minima invasività.' },
]

export default function Tecnologie() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tech-label', { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.8,
        scrollTrigger: { trigger: '.tech-label', start: 'top 85%' }
      })

      gsap.fromTo('.tech-heading span', { y: '100%' }, {
        y: '0%', duration: 1, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.tech-heading', start: 'top 80%' }
      })

      // Images — staggered parallax
      gsap.to('.tech-img-1', {
        yPercent: -12, ease: 'none',
        scrollTrigger: { trigger: '.tech-img-1', start: 'top bottom', end: 'bottom top', scrub: 0.5 }
      })
      gsap.to('.tech-img-2', {
        yPercent: -6, ease: 'none',
        scrollTrigger: { trigger: '.tech-img-2', start: 'top bottom', end: 'bottom top', scrub: 0.8 }
      })

      // Reveal images
      gsap.fromTo('.tech-img-1', { clipPath: 'inset(100% 0 0 0)' }, {
        clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.tech-img-1', start: 'top 80%' }
      })
      gsap.fromTo('.tech-img-2', { clipPath: 'inset(0 0 100% 0)' }, {
        clipPath: 'inset(0 0 0% 0)', duration: 1.2, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.tech-img-2', start: 'top 75%' }
      })

      document.querySelectorAll('.tech-item').forEach((item, i) => {
        gsap.fromTo(item, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.7, delay: i * 0.1,
          scrollTrigger: { trigger: item, start: 'top 85%' }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="tecnologie" className="relative bg-[var(--ink)] text-white overflow-hidden" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
      <div className="px-6 md:px-10 lg:px-16">
        <div className="tech-label font-mono text-[11px] text-white/30 uppercase tracking-[0.3em] mb-6" style={{ opacity: 0 }}>
          ( 04 ) — Tecnologie
        </div>

        <div className="tech-heading max-w-5xl mb-20 lg:mb-28">
          <h2 className="font-serif text-fluid-display leading-[0.95]">
            <span className="line-wrap"><span className="block">Tecnologie</span></span>
            <span className="line-wrap"><span className="block italic text-[var(--cyan)]">all'avanguardia</span></span>
          </h2>
        </div>

        {/* Asymmetric layout: overlapping images + text */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-start">
          {/* Left column — stacked images, overlapping */}
          <div className="lg:col-span-6 relative mb-12 lg:mb-0">
            <div className="tech-img-1 overflow-hidden rounded-2xl" style={{ clipPath: 'inset(100% 0 0 0)' }}>
              <img src={fotoDigitale} alt="Diagnostica digitale" className="w-full h-[40vh] lg:h-[55vh] object-cover" />
            </div>
            <div className="tech-img-2 overflow-hidden rounded-2xl w-2/3 lg:w-3/5 -mt-16 lg:-mt-24 ml-auto mr-4 relative z-10 border-4 border-[var(--ink)]" style={{ clipPath: 'inset(0 0 100% 0)' }}>
              <img src={fotoSurgery} alt="Chirurgia guidata digitale" className="w-full h-[30vh] lg:h-[40vh] object-cover" />
            </div>
          </div>

          {/* Right column — tech list + small image */}
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-16">
            <div className="space-y-8 mb-12">
              {techs.map((tech, i) => (
                <div key={tech.title} className="tech-item" style={{ opacity: 0 }}>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-mono text-[10px] text-white/20">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-serif text-fluid-xl text-white">{tech.title}</h3>
                  </div>
                  <p className="text-white/50 text-fluid-base leading-relaxed ml-10">{tech.desc}</p>
                </div>
              ))}
            </div>

            {/* Small x-ray image */}
            <div className="overflow-hidden rounded-xl w-2/3 ml-10">
              <img src={fotoXray} alt="Radiografia implantare" className="w-full h-[25vh] object-cover opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
