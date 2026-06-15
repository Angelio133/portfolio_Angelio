import "./styles/main.scss";
import Navbar from "./components/Navbar"; // Ou là où se trouve ta navbar
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Skills />

      {/* 2. IL MANQUAIT ÇA : Tu dois appeler le composant ici pour l'utiliser ! */}
      <Projects />

      <Contact />
    </div>
  );
}

export default App;
