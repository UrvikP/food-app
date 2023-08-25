import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";
import QuoteSection from "./components/QuoteSection";
import ChefsSection from "./components/ChefsSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroSection />
        <QuoteSection />
        <ImproveSkills />
        <ChefsSection />
        <Footer />
      </div>
    </div>
    
  );
}

export default App;
