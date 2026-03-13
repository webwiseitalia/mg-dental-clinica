import { Award, GraduationCap, Stethoscope, Briefcase } from 'lucide-react'
import fotoPante from '../assets/foto/foto-5.webp'
import fotoBosi from '../assets/foto/foto-10.webp'
import fotoIzzo from '../assets/foto/foto-7.webp'
import fotoTeam from '../assets/foto/foto-4.webp'

const teamMembers = [
  {
    name: 'Dott. Giuseppe Panté',
    role: 'Socio Fondatore',
    specialty: 'Chirurgia Orale e Implantologia',
    image: fotoPante,
    icon: Stethoscope,
    description: 'Laureato 110 e lode in Odontoiatria e Protesi Dentaria all\'Università di Messina. Specializzato in riabilitazioni implantari complete (Toronto Bridge), carico immediato e chirurgia guidata digitale. Casistica chirurgica estremamente ampia, con un orientamento verso la precisione chirurgica e la predicibilità dei risultati.',
    highlights: ['Chirurgia guidata digitale', 'Toronto Bridge', 'Carico immediato', 'Laureato 110 e lode'],
  },
  {
    name: 'Dott. Marco Bosi',
    role: 'Socio Fondatore e Direttore Sanitario',
    specialty: 'Endodonzia e Odontoiatria Estetica',
    image: fotoBosi,
    icon: Award,
    description: 'Laureato in Odontoiatria e Protesi Dentaria all\'Università Alfonso X El Sabio di Madrid. Punto di riferimento per colleghi della zona e altre province nelle devitalizzazioni e ritrattamenti complessi. Allievo del Dott. Castellani, esperto in faccette estetiche personalizzate e chirurgia orale per casi complessi.',
    highlights: ['Endodonzia complessa', 'Faccette estetiche', 'Denti del giudizio', 'Odontoiatri PC n.330'],
  },
  {
    name: 'Dott. Michele Izzo',
    role: 'Responsabile Ortodonzia',
    specialty: 'Ortodonzia e Invisalign',
    image: fotoIzzo,
    icon: GraduationCap,
    description: 'Laureato con il massimo dei voti all\'Università degli Studi di Milano. Oltre 20 anni esclusivamente in ortodonzia. Invisalign Apex & Diamond Provider — nel 2024 tra i soli 50 al mondo riconosciuti Apex Provider. Relatore in corsi di certificazione Invisalign. Esperto in disturbi del sonno (OSAS), gnatologia clinica, bruxismo e disturbi ATM.',
    highlights: ['Invisalign Apex Provider', '20+ anni di esperienza', 'Top 50 al mondo', 'Esperto OSAS e ATM'],
  },
  {
    name: 'Rag. Davide Muggia',
    role: 'CEO e Socio Fondatore',
    specialty: 'Gestione Strategica e Organizzativa',
    image: fotoTeam,
    icon: Briefcase,
    description: 'Gestione strategica, organizzativa e sviluppo della struttura. Nel settore odontoiatrico dal 2016. Coordinamento dei rapporti con fondi sanitari e assicurazioni, innovazione e digitalizzazione dello studio per offrire un servizio sempre più efficiente e a misura di paziente.',
    highlights: ['Nel settore dal 2016', 'Gestione fondi sanitari', 'Innovazione digitale', 'Sviluppo struttura'],
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm tracking-wider uppercase mb-3">Il Nostro Team</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Specialisti dedicati al tuo sorriso
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Un team di professionisti altamente qualificati, uniti dalla passione per l'odontoiatria d'eccellenza.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Photo */}
                <div className="sm:w-48 md:w-56 shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-56 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-6 flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                      <member.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                      <p className="text-primary-600 text-sm font-medium">{member.role}</p>
                      <p className="text-gray-500 text-xs">{member.specialty}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-block bg-primary-50 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
