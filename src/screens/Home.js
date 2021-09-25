import '../styles/home.css';
import DetailsPanel from "./DetailsPanel";
import FooterPanel from "./FooterPanel";
import HeaderSection from "./HeaderSection";
import IntroImageScreen from "./IntroImageScreen";

function Home() {
    return (
      <div className="Home">
        <HeaderSection />
        <IntroImageScreen />
        <DetailsPanel />
        <FooterPanel />
      </div>
    );
  }
  
  export default Home;