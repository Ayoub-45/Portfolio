import Navbar from "./components/navbar/navbar.component";
import "./index.css";
import { useCallback, useState } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { Route, Routes, useLocation } from "react-router-dom";
import { options } from "./helpers/options";
import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";
import Portfolio from "./pages/portfolio/portfolio.component";
import Skills from "./pages/skills/skills.component";
import Content from "./pages/content/content.component";
import Contact from "./pages/contact/contact.component";
import Services from "./pages/Services/services.component";
function App() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const renderParticles =
    location.pathname === "/" || location.pathname === "/home";
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);

  return (
    <>
      {renderParticles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={options}
        />
      )}

      <Navbar
        renderParticles={renderParticles}
        onSetToggle={setToggle}
        toggle={toggle}
      />
      {/* Main pages*/}
      <Routes>
        <Route index path="/" element={<Home toggle={toggle} />} />
        <Route path="/about" element={<About toggle={toggle} />} />
        <Route path="/portfolio" element={<Portfolio toggle={toggle} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills toggle={toggle} />} />
        <Route path="/content" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
