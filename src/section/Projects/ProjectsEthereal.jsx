import { Link } from "react-router-dom";
import styles from "./ProjectsEthereal.module.css";
import verialgo from "../../assets/VeriAlgo.jpg";
import baymax from "../../assets/Baymax.JPG";

const ProjectsEthereal = ({ limit = 2 }) => {
  const projects = [
    {
      id: 1,
      title: "Verialgo",
      description:
        "Fully synchronous bare-metal FPGA SoC built entirely in Verilog HDL, visualizing sorting algorithms as parallelised hardware FSMs with a custom Delta Animation Buffer and SPI OLED rendering pipeline.",
      image: verialgo,
      category: "hardware",
      keyTech: ["Verilog", "FPGA", "Dual-Port Block RAM"],
    },
    {
      id: 2,
      title: "Baymax",
      description:
        "Dual-microcontroller IoT study session monitor running FreeRTOS across an NXP MCXC444 and ESP32-S2, with AI-generated study reports and real-time Telegram notifications.",
      image: baymax,
      category: "hardware",
      keyTech: ["C", "FreeRTOS", "ESP32-S2"],
    },
  ];

  const featuredProjects = projects.slice(0, limit);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>portfolio</span>
            <h2 className={styles.sectionTitle}>featured projects</h2>
          </div>
          <Link to="/projects" className={styles.viewAllBtn}>
            view all projects →
          </Link>
        </div>

        <div className={styles.projectsGrid}>
          {featuredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              </div>
              <span className={styles.projCategory}>{project.category}</span>
              <h3 className={styles.projTitle}>{project.title}</h3>
              <p className={styles.projDesc}>{project.description}</p>
              <div className={styles.projTech}>
                {project.keyTech.map((tech, techIdx) => (
                  <span key={tech}>
                    {tech}
                    {techIdx < project.keyTech.length - 1 && (
                      <i aria-hidden="true"> · </i>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsEthereal;
