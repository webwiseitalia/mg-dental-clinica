import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/3514163362?text=Buongiorno%2C%20vorrei%20prenotare%20un%20appuntamento%20presso%20MG%20Dental."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Scrivici su WhatsApp
      </span>
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </a>
  )
}
