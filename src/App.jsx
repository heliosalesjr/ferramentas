import BentoGrid from "./components/BentoGrid"
import ChapterList from "./components/ChapterList"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ProgressBar from "./components/ProgressBar"
import { Button } from "./components/ui/button"


function App() {

  return (
    <>
      <Navbar />
      <ProgressBar />
      <HeroSection />
      <ChapterList />
      <Footer />
    </>
  )
}

export default App
