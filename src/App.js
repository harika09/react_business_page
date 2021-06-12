import './App.css';
import Home from './components/pages/Home'
import Navbar from './components/pages/Navbar';
import Features from './components/pages/Features'
import Services from './components/pages/Services';
import Projects from './components/pages/Projects'
import Clients from './components/pages/Clients';

function App() {
  return (
    <>
    <Navbar /> 
      <Home />
      <Features />
      <Services />
      <Projects/>
      <Clients />
    </>
  );
}

export default App;
