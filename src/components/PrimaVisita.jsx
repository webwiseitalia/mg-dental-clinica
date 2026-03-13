import { MessageCircle, CheckCircle2, CreditCard, Banknote, Smartphone, Building2 } from 'lucide-react'

const visitSteps = [
  { title: 'Valutazione clinica completa', desc: 'Esame approfondito della tua situazione orale' },
  { title: 'Esami diagnostici preliminari', desc: 'Radiografie e scansioni per una diagnosi precisa' },
  { title: 'Preventivo dettagliato', desc: 'Piano di cura personalizzato, chiaro e trasparente' },
]

const paymentMethods = [
  { icon: Banknote, label: 'Contanti' },
  { icon: CreditCard, label: 'Carte e Bancomat' },
  { icon: Building2, label: 'Bonifico' },
  { icon: Smartphone, label: 'Satispay / Apple Pay / Google Pay' },
]

export default function PrimaVisita() {
  return (
    <section id="prima-visita" className="py-20 md:py-28 bg-gradient-to-br from-primary-50 via-white to-accent-400/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Prima Visita */}
          <div>
            <span className="inline-block text-primary-600 font-semibold text-sm tracking-wider uppercase mb-3">Prima Visita</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              La tua prima visita è{' '}
              <span className="text-primary-600">senza impegno</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              La prima visita è il punto di partenza del tuo percorso con noi. L'obiettivo è offrirti una cura
              trasparente, serena, costruita intorno alle tue reali esigenze.
            </p>

            <div className="space-y-4 mb-8">
              {visitSteps.map((step, i) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20prenotare%20una%20prima%20visita%20senza%20impegno%20presso%20MG%20Dental."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40"
            >
              <MessageCircle className="w-5 h-5" />
              Prenota la tua Prima Visita
            </a>
          </div>

          {/* Pagamenti */}
          <div>
            <span className="inline-block text-primary-600 font-semibold text-sm tracking-wider uppercase mb-3">Pagamenti e Finanziamenti</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Soluzioni flessibili per ogni budget
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Crediamo che le cure odontoiatriche di qualità debbano essere accessibili a tutti. Per questo offriamo
              diverse opzioni di pagamento e finanziamento.
            </p>

            {/* Payment Methods */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {paymentMethods.map((pm) => (
                <div key={pm.label} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <pm.icon className="w-5 h-5 text-primary-600 shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{pm.label}</span>
                </div>
              ))}
            </div>

            {/* Financing Card */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Finanziamenti personalizzati</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" />
                  <span>Rateizzazione fino a <strong>84 mesi</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" />
                  <span>Tasso zero fino a <strong>12 mesi</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" />
                  <span><strong>Nessun anticipo</strong> richiesto</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" />
                  <span>Risposta rapida, anche in clinica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
