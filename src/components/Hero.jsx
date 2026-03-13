import { MessageCircle, Users, ShieldCheck, CreditCard, ScanLine, ChevronDown } from 'lucide-react'
import clinicExterior from '../assets/foto/foto-1.webp'

const badges = [
  { icon: ShieldCheck, text: 'Prima visita senza impegno' },
  { icon: CreditCard, text: 'Finanziamenti a tasso zero' },
  { icon: Users, text: 'Fondi sanitari convenzionati' },
  { icon: ScanLine, text: 'TAC 3D e tecnologie digitali' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={clinicExterior}
          alt="Esterno della clinica MG Dental a Castelvetro Piacentino"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Studio Dentistico a Castelvetro Piacentino</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] text-balance">
            Scegli di vivere{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">
              sorridendo
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            MG Dental è il tuo studio odontoiatrico a Castelvetro Piacentino. Tecnologie all'avanguardia,
            specialisti dedicati e un percorso di cura trasparente, costruito intorno a te.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20prenotare%20una%20prima%20visita%20presso%20MG%20Dental."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-xl shadow-primary-600/30 hover:shadow-primary-600/50 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Prenota la tua Prima Visita
            </a>
            <a
              href="#team"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200"
            >
              <Users className="w-5 h-5" />
              Scopri il Team
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {badges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3"
              >
                <badge.icon className="w-5 h-5 text-accent-400 shrink-0" />
                <span className="text-white/90 text-xs sm:text-sm font-medium leading-tight">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#chi-siamo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scorri verso il basso"
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </a>
    </section>
  )
}
