import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../common/ThemeContext";
import styles from "./ProjectsGlass.module.css";
import pawgress from "../../assets/pawgress.png";
import psonia from "../../assets/Psonia.png";
import verity from "../../assets/verity.png";

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={cardRef}
      className={styles.projectCard}
      onMouseMove={handleMouseMove}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glass gradient overlay that follows mouse */}
      <div
        className={styles.glassGradient}
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(var(--bubble-color-rgb), 0.15), transparent 50%)`,
        }}
      />

      <div className={styles.cardContent}>
        {/* Project Number Badge */}
        <div className={styles.projectBadge}>
          <span className={styles.badgeNumber}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Category Badge */}
        <div className={styles.categoryBadge}>{project.category}</div>

        {/* Image Section */}
        <div className={styles.imageContainer}>
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
                  className={styles.actionIcon}
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M7 16C4 17 4 14 3 14M11 18V15C11 14 11.1 13.6 10.5 13C12.7 12.8 15 12 15 8C15 6.8 14.5 5.8 13.7 5C13.9 4.5 14 3.5 13.5 2.5C13.5 2.5 12.6 2.3 11 3.5C10.1 3.3 9.1 3.3 8 3.5C6.4 2.3 5.5 2.5 5.5 2.5C5 3.5 5.1 4.5 5.3 5C4.5 5.8 4 6.8 4 8C4 12 6.3 12.8 8.5 13C7.9 13.6 8 14 8 15V18"
                      stroke="currentColor"
                      strokeWidth="1.5"
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
                  className={styles.actionIcon}
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M15 11V16C15 16.5 14.7 17 14.3 17.3C13.9 17.7 13.5 18 12.9 18H4C3.5 18 3 17.7 2.6 17.3C2.2 16.9 2 16.4 2 16V7C2 6.5 2.2 6 2.6 5.6C3 5.2 3.5 5 4 5H9M12 2H18M18 2V8M18 2L8 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
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

          {/* Key Technologies */}
          <div className={styles.techStack}>
            {project.keyTech.map((tech, idx) => (
              <span key={idx} className={styles.techTag}>
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
                className={`${styles.glassBtn} ${styles.primary}`}
              >
                <span>View Code</span>
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
                className={`${styles.glassBtn} ${styles.secondary}`}
              >
                <span>Live Demo</span>
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

const FeaturedProjects = ({ limit = 2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Verity - TikTok Tech Jam 2025",
      description:
        "Ensemble ML pipeline combining TinyBERT and Gradient Boosting to classify and filter user reviews, achieving 89% accuracy on 23M+ reviews.",
      image: verity,
      category: "ML/AI",
      keyTech: ["Python", "PyTorch", "NLP"],
      sourceCodeUrl: "https://github.com/Ariff1422/Verity",
    },
    {
      id: 2,
      title: "Psonia - For Smarter Shoppers",
      description:
        "Intelligent web application optimizing financial benefits, cost transparency, and notifications for online shoppers.",
      image: psonia,
      category: "Web App",
      keyTech: ["Node.js", "Selenium", "ML"],
      sourceCodeUrl: "https://github.com/Ariff1422/Psonia",
      liveUrl: "https://psonia-five.vercel.app",
    },
    {
      id: 3,
      title: "Pawgress - Task Management App",
      description:
        "Gamified productivity app where users complete tasks to nurture a virtual pet, making productivity fun and engaging.",
      image: pawgress,
      category: "Web App",
      keyTech: ["React", "Python", "Flask"],
      sourceCodeUrl: "https://github.com/pranavjana/HacknRoll-2025",
      liveUrl: "https://d9c57d06.pawgress.pages.dev/",
    },
  ];

  const { theme } = useTheme();
  const featuredProjects = projects.slice(0, limit);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`${styles.projectsSection} ${isVisible ? styles.visible : ""}`}
    >
      {/* Floating bubbles */}
      <div className={styles.sectionBubble1} />
      <div className={styles.sectionBubble2} />

      {/* Section Header with Glass */}
      <div className={styles.sectionHeader}>
        <div className={styles.headerGlass}>
          <span className={styles.sectionLabel}>Portfolio</span>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.titleUnderline} />
        </div>

        <Link to="/projects" className={styles.viewAllBtn}>
          <span>View All Projects</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7 15L12 10L7 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
