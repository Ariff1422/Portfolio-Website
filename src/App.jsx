import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarGlass from "./section/Navbar/NavbarGlass";
import NavbarBauhaus from "./section/Navbar/NavbarBauhaus";
import NavbarJdm from "./section/Navbar/NavbarJdm";
import NavbarEthereal from "./section/Navbar/NavbarEthereal";
import HeroGlass from "./section/Hero/HeroGlass";
import HeroBauhaus from "./section/Hero/HeroBauhaus";
import HeroJdm from "./section/Hero/HeroJdm";
import HeroEthereal from "./section/Hero/HeroEthereal";
import EducationGlass from "./section/Education/EducationGlass";
import EducationBauhaus from "./section/Education/EducationBauhaus";
import EducationJdm from "./section/Education/EducationJdm";
import EducationEthereal from "./section/Education/EducationEthereal";
import AboutBauhaus from "./section/About/AboutBauhaus";
import AboutJdm from "./section/About/AboutJdm";
import AboutEthereal from "./section/About/AboutEthereal";
import ExperienceBauhaus from "./section/Experience/ExperienceBauhaus";
import ExperienceJdm from "./section/Experience/ExperienceJdm";
import ExperienceEthereal from "./section/Experience/ExperienceEthereal";
import SkillsBauhaus from "./section/Skills/SkillsBauhaus";
import SkillsJdm from "./section/Skills/SkillsJdm";
import SkillsEthereal from "./section/Skills/SkillsEthereal";
import ProjectsGlass from "./section/Projects/ProjectsGlass";
import ProjectsBauhaus from "./section/Projects/ProjectsBauhaus";
import ProjectsJdm from "./section/Projects/ProjectsJdm";
import ProjectsEthereal from "./section/Projects/ProjectsEthereal";
import AllProjects from "./section/Projects/AllProjectsFinal";
import AllProjectsBauhaus from "./section/Projects/AllProjectsBauhaus";
import AllProjectsJdm from "./section/Projects/AllProjectsJdm";
import AllProjectsEthereal from "./section/Projects/AllProjectsEthereal";
import NotFound from "./section/NotFound/NotFound";
import Footer from "./section/Footer/Footer";
import FooterBauhaus from "./section/Footer/FooterBauhaus";
import FooterJdm from "./section/Footer/FooterJdm";
import FooterEthereal from "./section/Footer/FooterEthereal";
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
  if (theme === "bauhaus") return <NavbarBauhaus />;
  if (theme === "ethereal") return <NavbarEthereal />;
  return <NavbarGlass />;
}

function Hero() {
  const { theme } = useTheme();
  if (theme === "jdm") return <HeroJdm />;
  if (theme === "bauhaus") return <HeroBauhaus />;
  if (theme === "ethereal") return <HeroEthereal />;
  return <HeroGlass />;
}

function Education() {
  const { theme } = useTheme();
  if (theme === "jdm") return <EducationJdm />;
  if (theme === "bauhaus") return <EducationBauhaus />;
  if (theme === "ethereal") return <EducationEthereal />;
  return <EducationGlass />;
}

function About() {
  const { theme } = useTheme();
  if (theme === "jdm") return <AboutJdm />;
  if (theme === "bauhaus") return <AboutBauhaus />;
  if (theme === "ethereal") return <AboutEthereal />;
  return null;
}

function Experience() {
  const { theme } = useTheme();
  if (theme === "jdm") return <ExperienceJdm />;
  if (theme === "bauhaus") return <ExperienceBauhaus />;
  if (theme === "ethereal") return <ExperienceEthereal />;
  return null;
}

function Skills() {
  const { theme } = useTheme();
  if (theme === "jdm") return <SkillsJdm />;
  if (theme === "bauhaus") return <SkillsBauhaus />;
  if (theme === "ethereal") return <SkillsEthereal />;
  return null;
}

function Projects() {
  const { theme } = useTheme();
  if (theme === "jdm") return <ProjectsJdm />;
  if (theme === "bauhaus") return <ProjectsBauhaus />;
  if (theme === "ethereal") return <ProjectsEthereal />;
  return <ProjectsGlass />;
}

function ProjectsPage() {
  const { theme } = useTheme();
  if (theme === "jdm") return <AllProjectsJdm />;
  if (theme === "bauhaus") return <AllProjectsBauhaus />;
  if (theme === "ethereal") return <AllProjectsEthereal />;
  return <AllProjects />;
}

function PageFooter() {
  const { theme } = useTheme();
  if (theme === "jdm") return <FooterJdm />;
  if (theme === "bauhaus") return <FooterBauhaus />;
  if (theme === "ethereal") return <FooterEthereal />;
  return <Footer />;
}

function ThemeBackground() {
  const { theme } = useTheme();
  if (theme === "jdm") return <JdmBackground />;
  if (theme === "bauhaus" || theme === "ethereal") return null;
  return <ParticleBackground />;
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
