import AreaOfFocus from "../areaOfFocus/page"
import Concept from "../concept/page"
import Header from "../header/page"
import HeroSection from "../hero/page"
import IncubationModel from "../incubationModel/page"
import SectionTwo from "../sectionTwo/page"

const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <SectionTwo />
        <AreaOfFocus />
        <Concept />
        <IncubationModel />
    </div>
  )
}

export default Home