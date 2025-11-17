import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AllProjectsRedesigned.module.css";
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

        {/* Category Badge */}
        <div className={styles.categoryBadge}>{project.category}</div>

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
                  title="View Code"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                  title="Live Demo"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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

          {/* Key Technologies - Show only top 3 */}
          <div className={styles.techStack}>
            {project.keyTech.map((tech, techIndex) => (
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
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
        "Autonomous mBot for maze navigation integrating sensors, Arduino programming, circuit design, and k-NN machine learning.",
      image: cg1111a,
      category: "Hardware",
      keyTech: ["Arduino", "C++", "ML"],
      sourceCodeUrl: "https://github.com/xelisce/cg1111a",
    },
    {
      id: 2,
      title: "Pawgress - Task Management App",
      description:
        "Gamified productivity app where users complete tasks to nurture a virtual pet, making productivity fun and engaging.",
      image: pawgress,
      category: "Web App",
      keyTech: ["React", "Python", "Flask"],
      sourceCodeUrl: "https://github.com/pranavjana/HacknRoll-2025",
      liveUrl: "https://d9c57d06.pawgress.pages.dev/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Personal portfolio website built from scratch showcasing projects, skills, education and experience.",
      image: portfolio,
      category: "Web App",
      keyTech: ["React", "CSS", "Vite"],
      sourceCodeUrl: "https://github.com/Ariff1422/Portfolio-Website",
    },
    {
      id: 4,
      title: "Search-and-Rescue Robot ALEX",
      description:
        "Autonomous robot for search-and-rescue operations with LiDAR-based SLAM mapping, secure TLS communication, and real-time telemetry.",
      image: cg2111a,
      category: "Hardware",
      keyTech: ["ROS", "LiDAR", "C++"],
    },
    {
      id: 5,
      title: "Ethical Brand Guide",
      description:
        "Next.js and Supabase web dashboard that aggregates ESG data with a browser extension for e-commerce sites.",
      image: ebg,
      category: "Web App",
      keyTech: ["Next.js", "Supabase", "Python"],
      sourceCodeUrl: "https://github.com/ABJV-LifeHack-2025/LifeHack-2025/",
    },
    {
      id: 6,
      title: "Psonia - For Smarter Shoppers",
      description:
        "Intelligent web application optimizing financial benefits, ensuring cost transparency, and streamlining notifications for online shoppers.",
      image: psonia,
      category: "Web App",
      keyTech: ["Node.js", "Selenium", "ML"],
      sourceCodeUrl: "https://github.com/Ariff1422/Psonia",
      liveUrl: "https://psonia-five.vercel.app",
    },
  ];

  // Smart category-based filtering
  const categories = ["All", "Web App", "Hardware", "Mobile"];

  // Filter projects
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div
      ref={pageRef}
      className={`${styles.pageContainer} ${isVisible ? styles.visible : ""}`}
    >
      {/* Hero Header */}
      <div className={styles.pageHero}>
        <Link to="/" className={styles.backButton}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M15 10H5M5 10L10 15M5 10L10 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Back to Home</span>
        </Link>

        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Portfolio</span>
          <h1 className={styles.heroTitle}>All Projects</h1>
          <p className={styles.heroSubtitle}>
            A collection of {projects.length} projects showcasing my skills
            across different domains
          </p>
        </div>
      </div>

      {/* Filter Section - Category Based */}
      <div className={styles.filterSection}>
        <div className={styles.filterLabel}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M2.5 5H17.5M5 10H15M7.5 15H12.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Filter by category:
        </div>
        <div className={styles.filterButtons}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${
                activeFilter === category ? styles.active : ""
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
              {category !== "All" && (
                <span className={styles.count}>
                  {projects.filter((p) => p.category === category).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className={styles.emptyState}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle
              cx="40"
              cy="40"
              r="38"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.2"
            />
            <path
              d="M30 50L40 40L50 50M40 40V60"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <h3>No projects found</h3>
          <p>Try selecting a different category</p>
        </div>
      )}
    </div>
  );
};

export default AllProjects;
