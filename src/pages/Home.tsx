import { useTheme } from '../hooks/useTheme'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductCompare from '../components/ProductCompare'
import TrustBadges from '../components/TrustBadges'
import Gallery from '../components/Gallery'
import RentalSteps from '../components/RentalSteps'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ProductCompare />
        <TrustBadges />
        <Gallery />
        <RentalSteps />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
