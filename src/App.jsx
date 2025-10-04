import AboutSection from "./components/AboutSection/AboutSection"
import ContactSection from "./components/ContactSection/ContactSection"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import ProjectSection from "./components/ProjectsSection/ProjectSection"
import { SkillsSection } from "./components/SkillsSection/SkillsSection"
import { MeteorBackground } from "./components/UI/Meteor/MeteorBack"

function App() {

  return (
    <>
      <MeteorBackground />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
