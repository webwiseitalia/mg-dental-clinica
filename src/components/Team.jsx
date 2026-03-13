import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import fotoPante from '../assets/foto/foto-5.webp'
import fotoBosi from '../assets/foto/foto-10.webp'
import fotoIzzo from '../assets/foto/foto-7.webp'
import fotoTeam from '../assets/foto/foto-4.webp'

gsap.registerPlugin(ScrollTrigger)

const team = [
  {
    name: 'Giuseppe Panté',
    title: 'Dott.',
    role: 'Socio Fondatore',
    specialty: 'Chirurgia Orale e Implantologia',
    image: fotoPante,
    bio: 'Laureato 110 e lode all\'Università di Messina. Riabilitazioni implantari complete (Toronto Bridge), carico immediato e chirurgia guidata digitale. Precisione chirurgica e predicibilità dei risultati.',
    tags: ['Chirurgia guidata', 'Toronto Bridge', 'Carico immediato'],
  },
  {
    name: 'Marco Bosi',
    title: 'Dott.',
    role: 'Direttore Sanitario',
    specialty: 'Endodonzia e Estetica',
    image: fotoBosi,
    bio: 'Laureato all\'Università Alfonso X El Sabio di Madrid. Punto di riferimento per colleghi in endodonzia complessa. Allievo del Dott. Castellani. Faccette estetiche personalizzate e chirurgia orale.',
    tags: ['Endodonzia complessa', 'Faccette estetiche', 'PC n.330'],
  },
  {
    name: 'Michele Izzo',
    title: 'Dott.',
    role: 'Responsabile Ortodonzia',
    specialty: 'Ortodonzia e Invisalign',
    image: fotoIzzo,
    bio: 'Laureato con massimo dei voti a Milano. 20+ anni esclusivamente in ortodonzia. Invisalign Apex & Diamond Provider — tra i soli 50 al mondo. Esperto in OSAS, gnatologia, bruxismo e ATM.',
    tags: ['Apex Provider', 'Top 50 mondiale', '20+ anni'],
  },
  {
    name: 'Davide Muggia',
    title: 'Rag.',
    role: 'CEO e Socio Fondatore',
    specialty: 'Gestione Strategica',
    image: fotoTeam,
    bio: 'Nel settore odontoiatrico dal 2016. Gestione strategica e organizzativa. Coordinamento fondi sanitari e assicurazioni. Innovazione e digitalizzazione dello studio.',
    tags: ['Dal 2016', 'Fondi sanitari', 'Innovazione'],
  },
]

export default function Team() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.team-label', { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.8,
        scrollTrigger: { trigger: '.team-label', start: 'top 85%' }
      })

      gsap.fromTo('.team-heading span', { y: '100%' }, {
        y: '0%', duration: 1, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.team-heading', start: 'top 80%' }
      })

      // Each member with different reveal
      document.querySelectorAll('.team-member').forEach((member, i) => {
        const isEven = i % 2 === 0
        gsap.fromTo(member,
          { opacity: 0, y: 60, x: isEven ? -30 : 30 },
          {
            opacity: 1, y: 0, x: 0,
            duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: member, start: 'top 80%' }
          }
        )

        // Image scale
        const img = member.querySelector('.team-img')
        if (img) {
          gsap.fromTo(img, { scale: 1.2 }, {
            scale: 1, duration: 1.4, ease: 'power2.out',
            scrollTrigger: { trigger: member, start: 'top 80%' }
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="team" className="relative bg-[var(--ink)] text-white overflow-hidden" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
      <div className="px-6 md:px-10 lg:px-16">
        {/* Label */}
        <div className="team-label font-mono text-[var(--text-xs)] text-white/40 uppercase tracking-[0.3em] mb-6" style={{ opacity: 0 }}>
          ( 02 ) — Il Team
        </div>

        {/* Heading */}
        <div className="team-heading max-w-5xl mb-20 lg:mb-28">
          <h2 className="font-serif text-fluid-display leading-[0.95]">
            <span className="line-wrap"><span className="block">Specialisti</span></span>
            <span className="line-wrap"><span className="block italic text-[var(--cyan)]">dedicati</span></span>
          </h2>
        </div>

        {/* Team members — magazine layout, NOT a grid */}
        <div className="space-y-16 lg:space-y-0 lg:relative">
          {/* Member 1 — Panté: large left */}
          <div className="team-member lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start lg:mb-24" style={{ opacity: 0 }}>
            <div className="lg:col-span-5 overflow-hidden rounded-2xl mb-6 lg:mb-0">
              <img src={team[0].image} alt={team[0].name} className="team-img w-full h-[50vh] lg:h-[65vh] object-cover" />
            </div>
            <div className="lg:col-span-5 lg:col-start-7 lg:pt-20">
              <span className="font-mono text-[var(--text-xs)] text-white/30 uppercase tracking-widest">{team[0].specialty}</span>
              <h3 className="font-serif text-fluid-3xl mt-2 mb-1">
                <span className="text-white/50">{team[0].title}</span> {team[0].name}
              </h3>
              <p className="font-mono text-[var(--text-xs)] text-[var(--cyan)] uppercase tracking-wider mb-6">{team[0].role}</p>
              <p className="text-white/60 text-fluid-base leading-relaxed mb-6">{team[0].bio}</p>
              <div className="flex flex-wrap gap-2">
                {team[0].tags.map(t => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-white/40 border border-white/10 rounded-full px-3 py-1">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Member 2 — Bosi: right-aligned */}
          <div className="team-member lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start lg:mb-24" style={{ opacity: 0 }}>
            <div className="lg:col-span-5 lg:col-start-2 lg:pt-12 order-2 lg:order-1">
              <span className="font-mono text-[var(--text-xs)] text-white/30 uppercase tracking-widest">{team[1].specialty}</span>
              <h3 className="font-serif text-fluid-3xl mt-2 mb-1">
                <span className="text-white/50">{team[1].title}</span> {team[1].name}
              </h3>
              <p className="font-mono text-[var(--text-xs)] text-[var(--cyan)] uppercase tracking-wider mb-6">{team[1].role}</p>
              <p className="text-white/60 text-fluid-base leading-relaxed mb-6">{team[1].bio}</p>
              <div className="flex flex-wrap gap-2">
                {team[1].tags.map(t => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-white/40 border border-white/10 rounded-full px-3 py-1">{t}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 overflow-hidden rounded-2xl mb-6 lg:mb-0 order-1 lg:order-2">
              <img src={team[1].image} alt={team[1].name} className="team-img w-full h-[50vh] lg:h-[60vh] object-cover" />
            </div>
          </div>

          {/* Member 3 — Izzo: centered-left with offset */}
          <div className="team-member lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start lg:mb-24" style={{ opacity: 0 }}>
            <div className="lg:col-span-4 lg:col-start-2 overflow-hidden rounded-2xl mb-6 lg:mb-0">
              <img src={team[2].image} alt={team[2].name} className="team-img w-full h-[50vh] lg:h-[55vh] object-cover" />
            </div>
            <div className="lg:col-span-5 lg:col-start-7 lg:pt-8">
              <span className="font-mono text-[var(--text-xs)] text-white/30 uppercase tracking-widest">{team[2].specialty}</span>
              <h3 className="font-serif text-fluid-3xl mt-2 mb-1">
                <span className="text-white/50">{team[2].title}</span> {team[2].name}
              </h3>
              <p className="font-mono text-[var(--text-xs)] text-[var(--cyan)] uppercase tracking-wider mb-6">{team[2].role}</p>
              <p className="text-white/60 text-fluid-base leading-relaxed mb-6">{team[2].bio}</p>
              <div className="flex flex-wrap gap-2">
                {team[2].tags.map(t => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-white/40 border border-white/10 rounded-full px-3 py-1">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Member 4 — Muggia: compact, right */}
          <div className="team-member lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center" style={{ opacity: 0 }}>
            <div className="lg:col-span-4 lg:col-start-4 order-2 lg:order-1">
              <span className="font-mono text-[var(--text-xs)] text-white/30 uppercase tracking-widest">{team[3].specialty}</span>
              <h3 className="font-serif text-fluid-3xl mt-2 mb-1">
                <span className="text-white/50">{team[3].title}</span> {team[3].name}
              </h3>
              <p className="font-mono text-[var(--text-xs)] text-[var(--cyan)] uppercase tracking-wider mb-6">{team[3].role}</p>
              <p className="text-white/60 text-fluid-base leading-relaxed mb-6">{team[3].bio}</p>
              <div className="flex flex-wrap gap-2">
                {team[3].tags.map(t => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-white/40 border border-white/10 rounded-full px-3 py-1">{t}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3 lg:col-start-9 overflow-hidden rounded-2xl mb-6 lg:mb-0 order-1 lg:order-2">
              <img src={team[3].image} alt={team[3].name} className="team-img w-full h-[40vh] lg:h-[45vh] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
