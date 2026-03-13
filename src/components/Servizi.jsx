import { MessageCircle } from 'lucide-react'

const services = [
  {
    icon: '🦷',
    title: 'Implantologia e Chirurgia Orale',
    desc: 'Impianti singoli, multipli, Toronto Bridge, carico immediato, chirurgia guidata digitale, estrazioni complesse (denti del giudizio).',
  },
  {
    icon: '🔬',
    title: 'Endodonzia',
    desc: 'Devitalizzazioni e ritrattamenti canalari, anche casi complessi. Punto di riferimento per colleghi della zona.',
  },
  {
    icon: '✨',
    title: 'Igiene e Prevenzione',
    desc: 'Sedute di igiene professionale, programmi di prevenzione personalizzati per mantenere il tuo sorriso sano.',
  },
  {
    icon: '🪥',
    title: 'Otturazioni',
    desc: 'Odontoiatria conservativa e ricostruzioni estetiche con materiali di ultima generazione.',
  },
  {
    icon: '👑',
    title: 'Protesi Mobile e Fissa',
    desc: 'Protesi su impianti, protesi tradizionali, corone e ponti per ripristinare funzionalità ed estetica.',
  },
  {
    icon: '🔧',
    title: 'Ortodonzia Tradizionale',
    desc: 'Apparecchi fissi per bambini e adulti, terapie intercettive per correggere le malocclusioni.',
  },
  {
    icon: '💎',
    title: 'Ortodonzia Invisibile — Invisalign',
    desc: 'Allineatori trasparenti, Invisalign Diamond Provider. Trattamenti personalizzati per ogni età.',
  },
  {
    icon: '😁',
    title: 'Estetica Dentale',
    desc: 'Faccette estetiche personalizzate, sbiancamenti, trattamenti minimamente invasivi, dermal filler.',
  },
  {
    icon: '🧠',
    title: 'Gnatologia',
    desc: 'Disturbi ATM, bruxismo, acufeni, disturbi del sonno (OSAS), dispositivi avanzamento mandibolare (MAD).',
  },
]

export default function Servizi() {
  return (
    <section id="servizi" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm tracking-wider uppercase mb-3">I Nostri Servizi</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Cure complete per ogni esigenza
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Un'ampia gamma di trattamenti odontoiatrici eseguiti con le più moderne tecnologie e la massima attenzione al paziente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-gray-50 hover:bg-primary-600 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/20 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed mb-4 transition-colors">
                {service.desc}
              </p>
              <a
                href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20informazioni%20sul%20servizio%20di%20{encodeURIComponent(service.title)}."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary-600 group-hover:text-white font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Prenota una consulenza
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
