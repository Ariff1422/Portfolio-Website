import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./section/Navbar/Navbar";
import Hero from "./section/Hero/Hero";
import Resume from "./section/Education/Education";
import FeaturedProjects from "./section/Projects/Projects";
import AllProjects from "./section/Projects/AllProjects";
import Footer from "./section/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Resume />
              <FeaturedProjects />
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
      </Routes>
    </Router>
  );
}

export default App;
