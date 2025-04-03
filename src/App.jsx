import BentoGrid from "./components/BentoGrid"
import ChapterList from "./components/ChapterList"
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
    </>
  )
}

export default App
