import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import Particle from "./components/Particles/Particle"
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';


function App() {
  return (
    <div className="App">
      <Particle />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
