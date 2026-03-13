import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChiSiamo from './components/ChiSiamo'
import Team from './components/Team'
import Servizi from './components/Servizi'
import Tecnologie from './components/Tecnologie'
import PrimaVisita from './components/PrimaVisita'
import Fondi from './components/Fondi'
import Contatti from './components/Contatti'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ChiSiamo />
      <Team />
      <Servizi />
      <Tecnologie />
      <PrimaVisita />
      <Fondi />
      <Contatti />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
