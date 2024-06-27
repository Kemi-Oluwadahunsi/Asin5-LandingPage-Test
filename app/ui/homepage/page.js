import AreaOfFocus from "../areaOfFocus/page";
import CoFound from "../coFound/page";
import Concept from "../concept/page";
import Header from "../header/page";
import HeroSection from "../hero/page";
import IncubationModel from "../incubationModel/page";
import SectionTwo from "../sectionTwo/page";
import Studios from "../studio/page";
import EntProgram from "../entProgram/page";
import InvestorsNetwork from "../investorsnetwork/page";
import Equity from "../equity/page";
import Blogs from "../blogs/page";
import Featured from "../featuredIn/page";
import BuildCall from "../buildCall/page";
import Footer from "../footer/page";
import BuildFuture from "../buildFuture/page";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SectionTwo />
      <BuildFuture />
      <AreaOfFocus />
      <Concept />
      <IncubationModel />
      <Studios />
      <CoFound />
      <EntProgram />
      <InvestorsNetwork />
      <Equity />
      <Blogs />
      <Featured />
      <BuildCall />
      <Footer />
    </div>
  );
};

export default Home;
