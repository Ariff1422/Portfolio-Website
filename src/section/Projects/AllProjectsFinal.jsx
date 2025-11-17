import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AllProjectsFinal.module.css";
import pawgress from "../../assets/pawgress.png";
import cg1111a from "../../assets/cg1111a.jpeg";
import portfoliodark from "../../assets/portfoliodark.png";
import portfoliolight from "../../assets/portfoliolight.png";
import portfoliolightnew from "../../assets/Portfolio_updated_light.png";
import portfoliodarknew from "../../assets/Portfolio_updated_dark.png";
import cg2111a from "../../assets/CG2111A_robot_2.jpg";
import ebg from "../../assets/Ethical_Brand_Guide.png";
import psonia from "../../assets/Psonia.png";
import verity from "../../assets/verity.png";
import { useTheme } from "../../common/ThemeContext";

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showNewVersion, setShowNewVersion] = useState(true);

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
          {project.hasVersionToggle ? (
            <>
              <img
                src={showNewVersion ? project.imageNew : project.imageOld}
                alt={project.title}
                className={styles.projectImage}
              />
              <button
                className={styles.versionToggle}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNewVersion(!showNewVersion);
                }}
              >
                <span
                  className={`${styles.toggleOption} ${
                    !showNewVersion ? styles.active : ""
                  }`}
                >
                  Old
                </span>
                <span
                  className={`${styles.toggleOption} ${
                    showNewVersion ? styles.active : ""
                  }`}
                >
                  New
                </span>
              </button>
            </>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
          )}
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
                  className={styles.quickAction}
                  onClick={(e) => e.stopPropagation()}
                  title="Live Demo"
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
          {project.date && (
            <div className={styles.projectDate}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M11 2H3C2.44772 2 2 2.44772 2 3V11C2 11.5523 2.44772 12 3 12H11C11.5523 12 12 11.5523 12 11V3C12 2.44772 11.5523 2 11 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 1V3M5 1V3M2 5H12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {project.date}
            </div>
          )}
          <p className={styles.projectDescription}>{project.description}</p>

          {/* Key Technologies */}
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
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef(null);

  const portfolio = theme === "light" ? portfoliodark : portfoliolight;
  const portfolioNew =
    theme === "light" ? portfoliodarknew : portfoliolightnew;

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
      date: "Oct 2024 - Nov 2024",
      sortDate: new Date("2024-11-01"),
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
      date: "Jan 2025",
      sortDate: new Date("2025-01-01"),
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Personal portfolio website built from scratch showcasing projects, skills, education and experience with modern design.",
      image: portfolio,
      imageOld: portfolio,
      imageNew: portfolioNew,
      hasVersionToggle: true,
      category: "Web App",
      keyTech: ["React", "CSS", "Vite"],
      sourceCodeUrl: "https://github.com/Ariff1422/Portfolio-Website",
      date: "Feb 2025 - Present",
      sortDate: new Date("2025-02-01"),
    },
    {
      id: 4,
      title: "Search-and-Rescue Robot ALEX",
      description:
        "Autonomous robot for search-and-rescue operations with LiDAR-based SLAM mapping, secure TLS communication, and real-time telemetry.",
      image: cg2111a,
      category: "Hardware",
      keyTech: ["ROS", "LiDAR", "C++"],
      date: "Mar 2025 - Apr 2025",
      sortDate: new Date("2025-04-01"),
    },
    {
      id: 5,
      title: "Ethical Brand Guide",
      description:
        "Next.js and Supabase web dashboard that aggregates ESG data with a browser extension for e-commerce ethical scoring.",
      image: ebg,
      category: "Web App",
      keyTech: ["Next.js", "Supabase", "Python"],
      sourceCodeUrl: "https://github.com/ABJV-LifeHack-2025/LifeHack-2025/",
      date: "Jun 2025",
      sortDate: new Date("2025-06-01"),
    },
    {
      id: 6,
      title: "Psonia - For Smarter Shoppers",
      description:
        "Intelligent web application optimizing financial benefits, cost transparency, and notifications for online shoppers.",
      image: psonia,
      category: "Web App",
      keyTech: ["Node.js", "Selenium", "ML"],
      sourceCodeUrl: "https://github.com/Ariff1422/Psonia",
      liveUrl: "https://psonia-five.vercel.app",
      date: "May 2025 - Aug 2025",
      sortDate: new Date("2025-08-01"),
    },
    {
      id: 7,
      title: "Verity - TikTok Tech Jam 2025",
      description:
        "Ensemble ML pipeline combining TinyBERT and Gradient Boosting to classify and filter user reviews, achieving 89% accuracy on 23M+ reviews.",
      image: verity,
      category: "ML/AI",
      keyTech: ["Python", "PyTorch", "NLP"],
      sourceCodeUrl: "https://github.com/Ariff1422/Verity",
      date: "Aug 2025",
      sortDate: new Date("2025-08-15"),
    },
  ];

  // Only categories that have projects
  const categories = ["All", "Web App", "Hardware", "ML/AI"];

  // Filter, search and sort projects
  const filteredProjects = projects
    .filter((project) => {
      // Category filter
      if (activeFilter !== "All" && project.category !== activeFilter) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.keyTech.some((tech) => tech.toLowerCase().includes(query))
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return b.sortDate - a.sortDate;
      } else {
        return a.sortDate - b.sortDate;
      }
    });

  return (
    <div
      ref={pageRef}
      className={`${styles.pageContainer} ${isVisible ? styles.visible : ""}`}
    >
      {/* Floating Bubbles */}
      <div className={styles.bubbleContainer}>
        <div className={styles.bubble1}></div>
        <div className={styles.bubble2}></div>
        <div className={styles.bubble3}></div>
        <div className={styles.bubble4}></div>
        <div className={styles.bubble5}></div>
        <div className={styles.bubble6}></div>
      </div>

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
            Explore {projects.length} projects across Web Applications and
            Hardware Engineering
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={styles.searchIcon}
          >
            <path
              d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 19L14.65 14.65"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search projects by name, description, or technology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className={styles.clearSearch}
              aria-label="Clear search"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
        {searchQuery && (
          <div className={styles.searchResults}>
            Found {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
          </div>
        )}
      </div>

      {/* Filter and Sort Controls */}
      <div className={styles.controlsContainer}>
        {/* Filter Section */}
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
                <span>{category}</span>
                {category !== "All" && (
                  <span className={styles.count}>
                    {projects.filter((p) => p.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Section */}
        <div className={styles.sortSection}>
          <div className={styles.sortLabel}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M3 6H13M3 10H9M3 14H5M14 10V16M14 16L11 13M14 16L17 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Sort by date:
          </div>
          <div className={styles.sortButtons}>
            <button
              className={`${styles.sortButton} ${
                sortOrder === "newest" ? styles.active : ""
              }`}
              onClick={() => setSortOrder("newest")}
            >
              <span>Newest First</span>
            </button>
            <button
              className={`${styles.sortButton} ${
                sortOrder === "oldest" ? styles.active : ""
              }`}
              onClick={() => setSortOrder("oldest")}
            >
              <span>Oldest First</span>
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
