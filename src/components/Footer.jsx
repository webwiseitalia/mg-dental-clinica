import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import logo from '../assets/logo.webp'

const quickLinks = [
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Il Team', href: '#team' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Tecnologie', href: '#tecnologie' },
  { label: 'Fondi Sanitari', href: '#fondi' },
  { label: 'Prima Visita', href: '#prima-visita' },
  { label: 'Contatti', href: '#contatti' },
]

const services = [
  'Implantologia',
  'Endodonzia',
  'Ortodonzia Invisalign',
  'Estetica Dentale',
  'Igiene e Prevenzione',
  'Gnatologia',
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Banner */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Il tuo sorriso merita un progetto su misura
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Prenota la tua prima visita senza impegno. Ti aspettiamo in clinica.
          </p>
          <a
            href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20prenotare%20una%20prima%20visita%20presso%20MG%20Dental."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Prenota Ora
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="MG Dental" className="h-10 w-auto" />
              <span className="text-xl font-bold">MG Dental</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Studio dentistico a Castelvetro Piacentino. Cure odontoiatriche d'eccellenza con tecnologie all'avanguardia.
            </p>
            <p className="text-gray-500 text-xs">
              Direttore Sanitario: Dott. Marco Bosi<br />
              Odontoiatri PC n.330
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servizi</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a href="#servizi" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contattaci</h4>
            <div className="space-y-3">
              <a href="tel:0523797093" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                0523 797093
              </a>
              <a href="https://wa.me/3514163362" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <MessageCircle className="w-4 h-4 shrink-0" />
                351 416 3362
              </a>
              <a href="mailto:info@mgdental.it" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                info@mgdental.it
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Località Fornace 1<br />29010 Castelvetro Piacentino (PC)</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/mgdental_clinica/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/mgdentalclinica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} MG Dental — Studio Dentistico. Tutti i diritti riservati.
          </p>
          <p className="text-gray-500 text-xs text-center sm:text-right">
            Dir. Sanitario: Dott. Marco Bosi — Odontoiatri PC n.330
          </p>
        </div>
      </div>
    </footer>
  )
}
