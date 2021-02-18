import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import Particle from "./components/Particles/Particle"
import About from './pages/About/About';
function App() {
  return (
    <div className="App">
      <Particle />
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
