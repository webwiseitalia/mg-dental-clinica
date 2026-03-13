import { ShieldCheck, ArrowRight, MessageCircle, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const fondi = [
  'UniSalute', 'CASPIE', 'My Assistance', 'MetaSalute',
  'Blue Assistance', 'OdontoNetwork', 'Previmedical', 'AON', 'PACARD',
]

const fondiDetails = {
  'UniSalute': 'Novità! Convenzionati dal 1° gennaio.',
  'MetaSalute': 'Per dipendenti del settore metalmeccanico.',
  'PACARD': 'Dedicato alle Forze dell\'Ordine.',
}

const steps = [
  { num: '1', title: 'Indica il tuo fondo', desc: 'Dicci il nome del fondo sanitario o dell\'assicurazione a cui sei iscritto.' },
  { num: '2', title: 'Verifichiamo la copertura', desc: 'Ti diciamo come accedere alle prestazioni e cosa è coperto dal tuo piano.' },
  { num: '3', title: 'Gestiamo tutto noi', desc: 'Carichiamo le pratiche e gestiamo la burocrazia. Nessun anticipo, nessun pensiero.' },
]

const faqs = [
  {
    q: 'Come faccio a sapere se il mio fondo è convenzionato?',
    a: 'Contattaci telefonicamente, via WhatsApp o email indicando il nome del tuo fondo sanitario. Verificheremo immediatamente la copertura e ti guideremo nella procedura.',
  },
  {
    q: 'Devo anticipare i costi delle cure?',
    a: 'No. Per i fondi convenzionati gestiamo noi l\'intero processo di fatturazione diretta. Non dovrai anticipare nulla per le prestazioni coperte.',
  },
  {
    q: 'Il mio fondo non è in elenco, posso comunque usufruirne?',
    a: 'Certamente! Contattaci e verificheremo la possibilità di convenzionamento con il tuo fondo. Ci attiviamo per estendere continuamente la nostra rete di convenzioni.',
  },
  {
    q: 'Chi gestisce le pratiche burocratiche?',
    a: 'Ce ne occupiamo noi al 100%. Dalla verifica della copertura al caricamento delle pratiche, fino alla liquidazione. Tu devi solo pensare a sorridere.',
  },
]

export default function Fondi() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section id="fondi" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm tracking-wider uppercase mb-3">Fondi e Assicurazioni</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Convenzionati con i principali fondi sanitari
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Se hai una copertura sanitaria integrativa, puoi usarla direttamente da noi.
            Facciamo tutto noi: dalla verifica al caricamento pratiche, fino alla liquidazione.{' '}
            <strong className="text-gray-700">Nessun anticipo, nessuna burocrazia.</strong>
          </p>
        </div>

        {/* Fondi Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 mb-16">
          {fondi.map((fondo) => (
            <div
              key={fondo}
              className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <ShieldCheck className="w-8 h-8 text-primary-600 mx-auto mb-2 group-hover:text-primary-700" />
              <p className="font-semibold text-gray-800 text-xs sm:text-sm">{fondo}</p>
              {fondiDetails[fondo] && (
                <p className="text-[10px] text-primary-600 mt-1 leading-tight">{fondiDetails[fondo]}</p>
              )}
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Come funziona</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="text-center relative">
                <div className="w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.num}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm">{step.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-7 -right-4 w-8 h-8 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Not in list */}
        <div className="bg-primary-600 rounded-2xl p-8 text-center text-white mb-16">
          <HelpCircle className="w-10 h-10 text-accent-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Il tuo fondo non è in elenco?</h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Contattaci e verificheremo la copertura. Ci attiviamo per estendere continuamente la nostra rete di convenzioni e ti aiutiamo ad attivare la tua.
          </p>
          <a
            href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20verificare%20se%20il%20mio%20fondo%20sanitario%20%C3%A8%20convenzionato%20con%20MG%20Dental."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Verifica la tua copertura
          </a>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Domande frequenti sulle convenzioni</h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                  <p className="px-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
