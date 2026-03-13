import fotoDigitale from '../assets/foto/foto-7.webp'
import fotoSurgery from '../assets/foto/foto-4.webp'

const techs = [
  {
    title: 'TAC 3D',
    desc: 'Diagnostica tridimensionale per una pianificazione precisa degli interventi. Immagini ad altissima risoluzione per diagnosi sicure e accurate.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Scanner Intraorale Digitale',
    desc: 'Impronte digitali senza pasta, per il massimo comfort del paziente. Precisione millimetrica per protesi e allineatori perfetti.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: 'Radiologia ad Alta Precisione',
    desc: 'Immagini dettagliate per diagnosi accurate. Radiografia digitale a bassa dose per la massima sicurezza dei nostri pazienti.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: 'Chirurgia Guidata Digitale',
    desc: 'Progettazione digitale degli interventi implantari per la massima precisione e minima invasività. Risultati predicibili e tempi di recupero ridotti.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
]

export default function Tecnologie() {
  return (
    <section id="tecnologie" className="py-20 md:py-28 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent-400 font-semibold text-sm tracking-wider uppercase mb-3">Tecnologie</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Tecnologie all'avanguardia
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Investiamo costantemente nelle migliori tecnologie per offrirti diagnosi precise e trattamenti sicuri.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tech Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {techs.map((tech) => (
              <div
                key={tech.title}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-400/30 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="text-accent-400 mb-4">{tech.icon}</div>
                <h3 className="text-lg font-bold mb-2">{tech.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>

          {/* Images */}
          <div className="relative">
            <img
              src={fotoDigitale}
              alt="Dottore che mostra una radiografia digitale alla paziente"
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
            <img
              src={fotoSurgery}
              alt="Team di chirurghi durante un intervento guidato digitalmente"
              className="w-2/3 h-52 object-cover rounded-2xl shadow-2xl absolute -bottom-8 -left-4 border-4 border-gray-900"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
