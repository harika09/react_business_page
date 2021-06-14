import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import Features from "./components/pages/Features";
import Services from "./components/pages/Services";
import Projects from "./components/pages/Projects";
import Clients from "./components/pages/Clients";
import Pricing from "./components/pages/Pricing";
import Contact from "./components/pages/Contact";
import Work from "./components/pages/Work";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Services />
      <Projects />
      <Clients />
      <Pricing />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
