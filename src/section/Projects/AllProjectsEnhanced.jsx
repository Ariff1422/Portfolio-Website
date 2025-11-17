import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AllProjectsEnhanced.module.css";
import pawgress from "../../assets/pawgress.png";
import cg1111a from "../../assets/cg1111a.jpeg";
import portfoliodark from "../../assets/portfoliodark.png";
import portfoliolight from "../../assets/portfoliolight.png";
import cg2111a from "../../assets/CG2111A_robot_2.jpg";
import ebg from "../../assets/Ethical_Brand_Guide.png";
import psonia from "../../assets/Psonia.png";
import { useTheme } from "../../common/ThemeContext";

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !isHovered) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className={styles.projectCard}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardContent}>
        {/* Project Number */}
        <div className={styles.projectNumber}>
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Image Section */}
        <div className={styles.projectImageContainer}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.projectImage}
          />
          <div className={styles.imageOverlay}>
            <div className={styles.quickActions}>
              {project.sourceCodeUrl && (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.quickAction}
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.5C20 8.1 19.5 6.9 18.7 6C18.9 5.4 19 4.3 18.5 3C18.5 3 17.4 2.7 15 4.3C13.7 4 12.3 4 11 4.3C8.6 2.7 7.5 3 7.5 3C7 4.3 7.1 5.4 7.3 6C6.5 6.9 6 8.1 6 9.5C6 14.1 8.7 15.2 11.5 15.5C10.9 16.1 11 16.5 11 17.5V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.quickAction}
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21M21 3V9M21 3L10 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={styles.projectInfo}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>

          {/* Technologies */}
          <div className={styles.techStack}>
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className={styles.cardActions}>
            {project.sourceCodeUrl && (
              <a
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionButton} ${styles.primary}`}
              >
                View Code
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionButton} ${styles.secondary}`}
              >
                Live Demo
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AllProjects = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef(null);

  const portfolio = theme === "light" ? portfoliodark : portfoliolight;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      image: portfolio,
      technologies: ["React", "Tailwind CSS", "Vite", "Javascript"],
      sourceCodeUrl: "https://github.com/Ariff1422/Portfolio-Website",
    },
    {
      id: 4,
      title: "Search-and-Rescue Robot ALEX",
      description:
        "As part of CG2111A Engineering Principles and Practice II, my team and I designed Alex, an autonomous robot for search-and-rescue operations in hazardous environments, such as astronaut recovery missions.",
      image: cg2111a,
      technologies: [
        "Robot Operating System(ROS)",
        "LiDAR",
        "SLAM",
        "C++",
        "Python",
        "TLS",
      ],
    },
    {
      id: 5,
      title: "Ethical Brand Guide (LifeHack 2025)",
      description:
        "A portfolio-worthy project, the Ethical Brand Guide is a Next.js and Supabase web dashboard that aggregates ESG (Environmental, Social, and Governance) data.",
      image: ebg,
      technologies: ["Next.js", "Supabase", "Python", "Selenium"],
      sourceCodeUrl: "https://github.com/ABJV-LifeHack-2025/LifeHack-2025/",
    },
    {
      id: 6,
      title: "Psonia - For smarter shoppers",
      description:
        "Psonia is an intelligent web application designed to redefine the online shopping experience by optimizing financial benefits, ensuring cost transparency, providing dynamic organization, and streamlining notifications for users.",
      image: psonia,
      technologies: [
        "Node.js",
        "Tailwind CSS",
        "Selenium",
        "Python",
        "Jest",
        "Linear Regression",
      ],
      sourceCodeUrl: "https://github.com/Ariff1422/Psonia",
      liveUrl: "https://psonia-five.vercel.app",
    },
  ];

  // Extract unique technologies
  const allTechnologies = ["All"];
  projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      if (!allTechnologies.includes(tech)) {
        allTechnologies.push(tech);
      }
    });
  });

  // Filter projects
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  return (
    <div
      ref={pageRef}
      className={`${styles.pageContainer} ${isVisible ? styles.visible : ""}`}
    >
      {/* Header Section */}
      <div className={styles.pageHeader}>
        <Link to="/" className={styles.backButton}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Back to Home</span>
        </Link>

        <div className={styles.headerContent}>
          <span className={styles.headerLabel}>Portfolio</span>
          <h1 className={styles.pageTitle}>All Projects</h1>
          <p className={styles.pageSubtitle}>
            Explore my collection of {projects.length} projects across various
            technologies
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className={styles.filterSection}>
        <div className={styles.filterLabel}>Filter by:</div>
        <div className={styles.filterButtons}>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              className={`${styles.filterButton} ${
                activeFilter === tech ? styles.active : ""
              }`}
              onClick={() => setActiveFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Count */}
      <div className={styles.projectsCount}>
        Showing {filteredProjects.length} project
        {filteredProjects.length !== 1 ? "s" : ""}
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Background Elements */}
      <div className={styles.bgElement1}></div>
      <div className={styles.bgElement2}></div>
    </div>
  );
};

export default AllProjects;
