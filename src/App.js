import Navbar from "./components/navbar/navbar.component";
import "./index.css";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { Route, Routes, useLocation } from "react-router-dom";
import { options } from "./helpers/options";
import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";
import Portfolio from "./pages/portfolio/portfolio.component";
import Resume from "./pages/resume/resume.component";
import Skills from "./pages/skills/skills.component";
import Content from "./pages/content/content.component";
import Certifications from "./pages/certifications/certifications.component";
import Contact from "./pages/contact/contact.component";
function App() {
  const location = useLocation();
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const handleLocation = () => {
    console.log(location);
  };
  return (
    <div className="lato-light">
      {}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />

      <Navbar onhandleLocation={handleLocation} />
      {/* Main pages*/}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/content" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
