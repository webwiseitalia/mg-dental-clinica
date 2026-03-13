import { useState } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react'

const motivi = [
  'Prima visita',
  'Controllo',
  'Igiene',
  'Implantologia',
  'Ortodonzia',
  'Estetica',
  'Emergenza',
  'Informazioni fondi',
  'Altro',
]

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    telefono: '',
    email: '',
    motivo: '',
    data: '',
    note: '',
    privacy: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Buongiorno, vorrei prenotare un appuntamento presso MG Dental.%0A%0A` +
      `Nome: ${formData.nome}%0A` +
      `Telefono: ${formData.telefono}%0A` +
      `Email: ${formData.email}%0A` +
      `Motivo: ${formData.motivo}%0A` +
      `Data preferita: ${formData.data}%0A` +
      `Note: ${formData.note}`
    window.open(`https://wa.me/3514163362?text=${message}`, '_blank')
  }

  return (
    <section id="contatti" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm tracking-wider uppercase mb-3">Contatti</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Prenota il tuo appuntamento
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Siamo a tua disposizione per qualsiasi informazione. Scegli il canale che preferisci o compila il modulo.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Contacts */}
            <div className="space-y-4">
              <a
                href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20prenotare%20un%20appuntamento%20presso%20MG%20Dental."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-50 hover:bg-green-100 rounded-xl p-5 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <p className="text-gray-600 text-sm">351 416 3362</p>
                </div>
              </a>

              <a
                href="tel:0523797093"
                className="flex items-center gap-4 bg-primary-50 hover:bg-primary-100 rounded-xl p-5 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Telefono</p>
                  <p className="text-gray-600 text-sm">0523 797093</p>
                </div>
              </a>

              <a
                href="mailto:info@mgdental.it"
                className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600 text-sm">info@mgdental.it</p>
                </div>
              </a>
            </div>

            {/* Address */}
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Dove siamo</p>
                  <p className="text-gray-600 text-sm">Località Fornace 1<br />29010 Castelvetro Piacentino (PC)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Orari</p>
                  <p className="text-gray-600 text-sm">Contattaci per conoscere gli orari di apertura</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-sm h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.1!2d9.9885!3d45.0885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47803a0c3e4a7b1d%3A0x1!2sLocalit%C3%A0+Fornace+1%2C+29010+Castelvetro+Piacentino+PC!5e0!3m2!1sit!2sit!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Posizione MG Dental su Google Maps"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Richiedi un appuntamento</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome e Cognome *</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefono *</label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                    placeholder="Il tuo numero"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                    placeholder="La tua email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Motivo della visita *</label>
                  <select
                    name="motivo"
                    required
                    value={formData.motivo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm bg-white"
                  >
                    <option value="">Seleziona...</option>
                    {motivi.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Data e orario preferiti</label>
                <input
                  type="text"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                  placeholder="Es: Lunedì mattina, Mercoledì pomeriggio..."
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Note</label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm resize-none"
                  placeholder="Altre informazioni utili..."
                />
              </div>

              <div className="flex items-start gap-2 mb-6">
                <input
                  type="checkbox"
                  name="privacy"
                  id="privacy"
                  required
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <label htmlFor="privacy" className="text-xs text-gray-500">
                  Acconsento al trattamento dei miei dati personali ai sensi del D.Lgs. 196/2003 e del GDPR (Regolamento UE 2016/679). *
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40"
              >
                <Send className="w-5 h-5" />
                Invia Richiesta via WhatsApp
              </button>

              <p className="text-xs text-gray-400 text-center mt-3">
                Il modulo verrà inviato tramite WhatsApp. Ti risponderemo il prima possibile.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
