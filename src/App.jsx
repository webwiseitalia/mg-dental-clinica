import SmoothScroll from './components/SmoothScroll'
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
import CustomCursor from './components/CustomCursor'
import GrainOverlay from './components/GrainOverlay'
import Marquee from './components/Marquee'

function App() {
  return (
    <SmoothScroll>
      <div className="relative">
        <CustomCursor />
        <GrainOverlay />
        <Navbar />
        <Hero />
        <Marquee text="Scegli di vivere sorridendo" separator="◆" />
        <ChiSiamo />
        <Team />
        <Marquee text="Cure d'eccellenza" separator="✦" />
        <Servizi />
        <Tecnologie />
        <PrimaVisita />
        <Marquee text="MG Dental Clinica" separator="◆" dark />
        <Fondi />
        <Contatti />
        <Footer />
        <WhatsAppButton />
      </div>
    </SmoothScroll>
  )
}

export default App
