import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const motivi = [
  'Prima visita', 'Controllo', 'Igiene', 'Implantologia',
  'Ortodonzia', 'Estetica', 'Emergenza', 'Informazioni fondi', 'Altro',
]

export default function Contatti() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    nome: '', telefono: '', email: '', motivo: '', data: '', note: '', privacy: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Buongiorno, vorrei prenotare un appuntamento.%0A%0ANome: ${formData.nome}%0ATelefono: ${formData.telefono}%0AEmail: ${formData.email}%0AMotivo: ${formData.motivo}%0AData preferita: ${formData.data}%0ANote: ${formData.note}`
    window.open(`https://wa.me/3514163362?text=${msg}`, '_blank')
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cont-label', { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.8,
        scrollTrigger: { trigger: '.cont-label', start: 'top 85%' }
      })

      gsap.fromTo('.cont-heading span', { y: '100%' }, {
        y: '0%', duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.cont-heading', start: 'top 80%' }
      })

      gsap.fromTo('.cont-info', { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 0.9, stagger: 0.15,
        scrollTrigger: { trigger: '.cont-info-wrap', start: 'top 75%' }
      })

      gsap.fromTo('.cont-form', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1,
        scrollTrigger: { trigger: '.cont-form', start: 'top 80%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contatti" className="relative bg-[var(--cream)] overflow-hidden" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-xl)' }}>
      <div className="px-6 md:px-10 lg:px-16">
        <div className="cont-label font-mono text-[11px] text-[var(--gray)] uppercase tracking-[0.3em] mb-6" style={{ opacity: 0 }}>
          ( 07 ) — Contatti
        </div>

        <div className="cont-heading max-w-5xl mb-16 lg:mb-24">
          <h2 className="font-serif text-fluid-display leading-[0.95] text-[var(--ink)]">
            <span className="line-wrap"><span className="block">Prenota il tuo</span></span>
            <span className="line-wrap"><span className="block italic text-[var(--blue)]">appuntamento</span></span>
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left — contact info, NOT cards */}
          <div className="lg:col-span-4 mb-12 lg:mb-0 cont-info-wrap">
            {/* Big contact links */}
            <div className="space-y-8 mb-12">
              <a href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20prenotare%20un%20appuntamento." target="_blank" rel="noopener noreferrer" className="cont-info block group" style={{ opacity: 0 }}>
                <span className="font-mono text-[10px] text-[var(--gray)] uppercase tracking-widest block mb-1">WhatsApp</span>
                <span className="font-serif text-fluid-2xl text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors">351 416 3362</span>
              </a>
              <a href="tel:0523797093" className="cont-info block group" style={{ opacity: 0 }}>
                <span className="font-mono text-[10px] text-[var(--gray)] uppercase tracking-widest block mb-1">Telefono</span>
                <span className="font-serif text-fluid-2xl text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors">0523 797093</span>
              </a>
              <a href="mailto:info@mgdental.it" className="cont-info block group" style={{ opacity: 0 }}>
                <span className="font-mono text-[10px] text-[var(--gray)] uppercase tracking-widest block mb-1">Email</span>
                <span className="font-serif text-fluid-xl text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors">info@mgdental.it</span>
              </a>
            </div>

            {/* Address */}
            <div className="cont-info" style={{ opacity: 0 }}>
              <span className="font-mono text-[10px] text-[var(--gray)] uppercase tracking-widest block mb-2">Dove siamo</span>
              <p className="text-[var(--ink)] text-fluid-base leading-relaxed">
                Località Fornace 1<br />
                29010 Castelvetro Piacentino (PC)
              </p>
            </div>

            {/* Map */}
            <div className="cont-info mt-8 rounded-xl overflow-hidden h-44" style={{ opacity: 0 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.1!2d9.9885!3d45.0885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA1JzE4LjYiTiA5wrA1OSczMS4zIkU!5e0!3m2!1sit!2sit"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                title="MG Dental - Mappa" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — form, offset */}
          <div className="lg:col-span-7 lg:col-start-6">
            <form onSubmit={handleSubmit} className="cont-form bg-white rounded-2xl p-8 lg:p-10 shadow-sm" style={{ opacity: 0 }}>
              <h3 className="font-serif text-fluid-2xl text-[var(--ink)] mb-8">Richiedi un appuntamento</h3>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block font-mono text-[10px] text-[var(--gray)] uppercase tracking-widest mb-2">Nome e Cognome *</label>
                  <input type="text" name="nome" required value={formData.nome} onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-black/15 bg-transparent text-[var(--ink)] text-fluid-base focus:border-[var(--blue)] focus:outline-none transition-colors" placeholder="Mario Rossi" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-[var(--gray)] uppercase tracking-widest mb-2">Telefono *</label>
                  <input type="tel" name="telefono" required value={formData.telefono} onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-black/15 bg-transparent text-[var(--ink)] text-fluid-base focus:border-[var(--blue)] focus:outline-none transition-colors" placeholder="+39 ..." />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block font-mono text-[10px] text-[var(--gray)] uppercase tracking-widest mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-black/15 bg-transparent text-[var(--ink)] text-fluid-base focus:border-[var(--blue)] focus:outline-none transition-colors" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-[var(--gray)] uppercase tracking-widest mb-2">Motivo *</label>
                  <select name="motivo" required value={formData.motivo} onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-black/15 bg-transparent text-[var(--ink)] text-fluid-base focus:border-[var(--blue)] focus:outline-none transition-colors">
                    <option value="">Seleziona...</option>
                    {motivi.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <label className="block font-mono text-[10px] text-[var(--gray)] uppercase tracking-widest mb-2">Data e orario preferiti</label>
                <input type="text" name="data" value={formData.data} onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-black/15 bg-transparent text-[var(--ink)] text-fluid-base focus:border-[var(--blue)] focus:outline-none transition-colors" placeholder="Es: Lunedì mattina" />
              </div>

              <div className="mb-8">
                <label className="block font-mono text-[10px] text-[var(--gray)] uppercase tracking-widest mb-2">Note</label>
                <textarea name="note" value={formData.note} onChange={handleChange} rows={3}
                  className="w-full px-0 py-3 border-0 border-b border-black/15 bg-transparent text-[var(--ink)] text-fluid-base focus:border-[var(--blue)] focus:outline-none transition-colors resize-none" placeholder="Informazioni aggiuntive..." />
              </div>

              <div className="flex items-start gap-3 mb-8">
                <input type="checkbox" name="privacy" id="privacy" required checked={formData.privacy} onChange={handleChange}
                  className="mt-1 rounded border-gray-300" />
                <label htmlFor="privacy" className="text-[var(--gray)] text-xs leading-relaxed">
                  Acconsento al trattamento dei dati personali ai sensi del GDPR (Reg. UE 2016/679). *
                </label>
              </div>

              <motion.button
                type="submit"
                className="group inline-flex items-center gap-4"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="w-14 h-14 rounded-full bg-[var(--ink)] flex items-center justify-center group-hover:bg-[var(--blue)] transition-colors duration-500">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
                <span className="text-[var(--ink)] text-fluid-lg font-light tracking-wide">Invia via WhatsApp</span>
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
