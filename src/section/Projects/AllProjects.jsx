import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectsStyles.module.css";
import pawgress from "../../assets/pawgress.png";
import cg1111a from "../../assets/cg1111a.jpeg";

const AllProjects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "A-maze-ing Race - mBot Maze Solving Robot",
      description:
        "My group developed an autonomous mBot for maze navigation through integrating sensors, Arduino programming, circuit design, and k-NN to enhance colour sensor performance.",
      image: cg1111a,
      technologies: ["Arduino", "C++", "Machine Learning", "Sensors"],
      sourceCodeUrl: "https://github.com/xelisce/cg1111a",
    },
    {
      id: 2,
      title: "Pawgress - Task Management App",
      description:
        "Pawgress is a gamified productivity app where users complete tasks to nurture a virtual pet, making productivity fun and engaging.",
      image: pawgress,
      technologies: ["React", "Tailwind CSS", "Vite", "Python", "Flask"],
      sourceCodeUrl: "https://github.com/pranavjana/HacknRoll-2025",
      liveUrl: "https://d9c57d06.pawgress.pages.dev/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built from scratch showcasing my projects, skills, education and experience.",
      image: "../../assets/pawgress.png",
      technologies: ["React", "Tailwind CSS", "Vite", "Javascript"],
      sourceCodeUrl: "https://github.com/pranavjana/HacknRoll-2025",
      liveUrl: "https://d9c57d06.pawgress.pages.dev/",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  // Extract unique technology categories for filtering
  const allTechnologies = ["All"];
  projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      if (!allTechnologies.includes(tech)) {
        allTechnologies.push(tech);
      }
    });
  });

  // Filter projects based on selected technology
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  return (
    <div className={styles.projectsPageContainer}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.pageTitle}>All Projects</h1>
        <Link to="/" className={styles.viewAllButton}>
          <span className={styles.arrowIcon}>←</span> Back to Home
        </Link>
      </div>

      {/* Filter Controls */}
      <div className={styles.filterControls}>
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            className={`${styles.filterButton} ${
              activeFilter === tech ? styles.activeFilter : ""
            }`}
            onClick={() => setActiveFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            {/* Image Section */}
            <div className={styles.projectImageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>

            {/* Content Section */}
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>

              {/* Technologies */}
              <div className={styles.techTags}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className={styles.projectButtons}>
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.codeButton}
                >
                  <span className={styles.githubIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </span>
                  View Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.demoButton}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
