import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarGlass from "./section/Navbar/NavbarGlass";
import HeroGlass from "./section/Hero/HeroGlass";
import EducationGlass from "./section/Education/EducationGlass";
import ProjectsGlass from "./section/Projects/ProjectsGlass";
import AllProjects from "./section/Projects/AllProjectsFinal";
import NotFound from "./section/NotFound/NotFound";
import Footer from "./section/Footer/Footer";
import ScrollToTop from "./common/ScrollToTop";
import PageLoader from "./common/PageLoader";
import ParticleBackground from "./common/ParticleBackground";
import PageTransition from "./common/PageTransition";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <PageLoader>
      <Router>
        <ParticleBackground />
        <NavbarGlass />
        <ScrollToTop />
        <PageTransition>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroGlass />
                  <EducationGlass />
                  <ProjectsGlass />
                  <Footer />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <AllProjects />
                  <Footer />
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </Router>
    </PageLoader>
  );
}

export default App;
