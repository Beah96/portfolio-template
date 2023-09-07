import { Footer } from "./components/Footer/footer"
import { Header } from "./components/Header/header"
import { AboutMeSection } from "./components/Sections/AboutMe/aboutMeSection"
import { BannerSection } from "./components/Sections/BannerSection/bannerSection"
import { ProjectSection } from "./components/Sections/ProjectSection/projectSection"
import { TechSection } from "./components/Sections/TechSection/techSection"
import "./styles/reset.css"
import "./styles/globalStyles.css"



function App() {

  return (
    <>
      <Header/>
      <BannerSection/>
      <AboutMeSection/>
      <TechSection/>
      <ProjectSection/>
      <Footer/>

    </>
  )
}

export default App
