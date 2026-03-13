import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Marquee({ text = 'MG Dental', separator = '✦', dark = false, speed = 1 }) {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -50,
        ease: 'none',
        duration: 20 / speed,
        repeat: -1,
      })

      // Speed up on scroll
      gsap.to(track, {
        timeScale: 3,
        ease: 'none',
        scrollTrigger: {
          trigger: track.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    })

    return () => ctx.revert()
  }, [speed])

  const items = Array.from({ length: 12 }, (_, i) => (
    <span key={i} className="flex items-center gap-8 shrink-0 px-4">
      <span className={`font-serif text-fluid-4xl lg:text-fluid-display italic whitespace-nowrap ${dark ? 'text-white/10' : 'text-black/[0.06]'}`}>
        {text}
      </span>
      <span className={`text-sm ${dark ? 'text-white/5' : 'text-black/[0.04]'}`}>{separator}</span>
    </span>
  ))

  return (
    <div className={`overflow-hidden py-6 lg:py-10 ${dark ? 'bg-[var(--ink)]' : 'bg-[var(--cream)]'}`}>
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
        {items}
      </div>
    </div>
  )
}
