import { Heart, Shield, Laptop, CalendarCheck, FileCheck } from 'lucide-react'
import clinicFacade from '../assets/foto/foto-12.webp'
import clinicInterior from '../assets/foto/foto-2.webp'

const values = [
  { icon: Heart, title: 'Prestazioni personalizzate', desc: 'Ogni percorso di cura è costruito su misura per le tue esigenze' },
  { icon: Laptop, title: 'Tecnologie digitali', desc: 'TAC 3D, scanner intraorale e chirurgia guidata' },
  { icon: Shield, title: 'Ambiente sicuro e accogliente', desc: 'Protocolli rigorosi in un ambiente moderno e confortevole' },
  { icon: CalendarCheck, title: 'Prenotazioni flessibili', desc: 'Orari comodi e prenotazione rapida via WhatsApp' },
  { icon: FileCheck, title: 'Trasparenza nei preventivi', desc: 'Preventivi dettagliati e chiari, senza sorprese' },
]

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm tracking-wider uppercase mb-3">Chi Siamo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            La nostra forza è l'ascolto
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Ogni paziente ha una storia, e ogni sorriso merita un progetto su misura.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3">
                <img
                  src={clinicFacade}
                  alt="Facciata della clinica MG Dental"
                  className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="col-span-2 pt-8">
                <img
                  src={clinicInterior}
                  alt="Sala operatoria moderna della clinica MG Dental"
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 left-6 bg-primary-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-primary-600/30">
              <p className="text-2xl font-bold">Dal 2023</p>
              <p className="text-sm text-white/80">al servizio del tuo sorriso</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Un team affiatato per cure odontoiatriche d'eccellenza
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              MG Dental nasce nel 2023 dall'esperienza e dalla visione di un team affiatato e altamente specializzato,
              con l'obiettivo di offrire cure odontoiatriche d'eccellenza in un ambiente moderno, accogliente e
              tecnologicamente avanzato.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Dopo tanti anni di collaborazione, i fondatori hanno deciso di creare una realtà indipendente,
              trasparente, che mette il paziente al centro di ogni decisione clinica.
            </p>
            <a
              href="#team"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Scopri il nostro team
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">{v.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
