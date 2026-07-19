import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarGlass from "./section/Navbar/NavbarGlass";
import NavbarBauhaus from "./section/Navbar/NavbarBauhaus";
import NavbarJdm from "./section/Navbar/NavbarJdm";
import HeroGlass from "./section/Hero/HeroGlass";
import HeroBauhaus from "./section/Hero/HeroBauhaus";
import HeroJdm from "./section/Hero/HeroJdm";
import EducationGlass from "./section/Education/EducationGlass";
import EducationBauhaus from "./section/Education/EducationBauhaus";
import EducationJdm from "./section/Education/EducationJdm";
import AboutBauhaus from "./section/About/AboutBauhaus";
import AboutJdm from "./section/About/AboutJdm";
import ExperienceBauhaus from "./section/Experience/ExperienceBauhaus";
import ExperienceJdm from "./section/Experience/ExperienceJdm";
import SkillsBauhaus from "./section/Skills/SkillsBauhaus";
import SkillsJdm from "./section/Skills/SkillsJdm";
import ProjectsGlass from "./section/Projects/ProjectsGlass";
import ProjectsBauhaus from "./section/Projects/ProjectsBauhaus";
import ProjectsJdm from "./section/Projects/ProjectsJdm";
import AllProjects from "./section/Projects/AllProjectsFinal";
import AllProjectsBauhaus from "./section/Projects/AllProjectsBauhaus";
import AllProjectsJdm from "./section/Projects/AllProjectsJdm";
import NotFound from "./section/NotFound/NotFound";
import Footer from "./section/Footer/Footer";
import FooterBauhaus from "./section/Footer/FooterBauhaus";
import FooterJdm from "./section/Footer/FooterJdm";
import ScrollToTop from "./common/ScrollToTop";
import PageLoader from "./common/PageLoader";
import ParticleBackground from "./common/ParticleBackground";
import JdmBackground from "./common/JdmBackground";
import PageTransition from "./common/PageTransition";
import { useEffect } from "react";
import { useTheme } from "./common/ThemeContext";

function Navbar() {
  const { theme } = useTheme();
  if (theme === "jdm") return <NavbarJdm />;
  return theme === "bauhaus" ? <NavbarBauhaus /> : <NavbarGlass />;
}

function Hero() {
  const { theme } = useTheme();
  if (theme === "jdm") return <HeroJdm />;
  return theme === "bauhaus" ? <HeroBauhaus /> : <HeroGlass />;
}

function Education() {
  const { theme } = useTheme();
  if (theme === "jdm") return <EducationJdm />;
  return theme === "bauhaus" ? <EducationBauhaus /> : <EducationGlass />;
}

function About() {
  const { theme } = useTheme();
  if (theme === "jdm") return <AboutJdm />;
  return theme === "bauhaus" ? <AboutBauhaus /> : null;
}

function Experience() {
  const { theme } = useTheme();
  if (theme === "jdm") return <ExperienceJdm />;
  return theme === "bauhaus" ? <ExperienceBauhaus /> : null;
}

function Skills() {
  const { theme } = useTheme();
  if (theme === "jdm") return <SkillsJdm />;
  return theme === "bauhaus" ? <SkillsBauhaus /> : null;
}

function Projects() {
  const { theme } = useTheme();
  if (theme === "jdm") return <ProjectsJdm />;
  return theme === "bauhaus" ? <ProjectsBauhaus /> : <ProjectsGlass />;
}

function ProjectsPage() {
  const { theme } = useTheme();
  if (theme === "jdm") return <AllProjectsJdm />;
  return theme === "bauhaus" ? <AllProjectsBauhaus /> : <AllProjects />;
}

function PageFooter() {
  const { theme } = useTheme();
  if (theme === "jdm") return <FooterJdm />;
  return theme === "bauhaus" ? <FooterBauhaus /> : <Footer />;
}

function ThemeBackground() {
  const { theme } = useTheme();
  if (theme === "jdm") return <JdmBackground />;
  return theme === "bauhaus" ? null : <ParticleBackground />;
}

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
        <ThemeBackground />
        <Navbar />
        <ScrollToTop />
        <PageTransition>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Experience />
                  <Education />
                  <Skills />
                  <Projects />
                  <PageFooter />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <ProjectsPage />
                  <PageFooter />
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
