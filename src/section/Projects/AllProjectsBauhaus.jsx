import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AllProjectsBauhaus.module.css";
import pawgress from "../../assets/pawgress.png";
import cg1111a from "../../assets/cg1111a.jpeg";
import portfoliolight from "../../assets/portfoliolight.png";
import cg2111a from "../../assets/CG2111A_robot_2.jpg";
import ebg from "../../assets/Ethical_Brand_Guide.png";
import psonia from "../../assets/Psonia.png";
import verity from "../../assets/verity.png";
import verialgo from "../../assets/VeriAlgo.jpg";
import baymax from "../../assets/Baymax.JPG";
import rosetta from "../../assets/Rosetta.png";
import veritasAi from "../../assets/Veritas.ai.png";

const CATEGORY_COLORS = {
  "Web App": "#E63946",
  Hardware: "#1D3557",
  "ML/AI": "#F4A400",
};

const ProjectCard = ({ project }) => {
  if (project.inProgress) {
    return (
      <div className={`${styles.projectCard} ${styles.inProgressCard}`}>
        <span className={styles.inProgressBadge}>In Progress</span>
        <h3 className={styles.projTitle}>{project.title}</h3>
        <p className={styles.projDesc}>{project.description}</p>
        <div className={styles.techTags}>
          {project.keyTech.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
          style={{ objectPosition: project.imagePosition || "center" }}
        />
      </div>
      <span
        className={styles.projCategory}
        style={{ background: CATEGORY_COLORS[project.category] }}
      >
        {project.category}
      </span>
      <h3 className={styles.projTitle}>{project.title}</h3>
      <p className={styles.projDesc}>{project.description}</p>
      <div className={styles.techTags}>
        {project.keyTech.map((tech) => (
          <span key={tech} className={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>
      <div className={styles.cardActions}>
        {project.sourceCodeUrl && (
          <a
            href={project.sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionBtn}
          >
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionBtn} ${styles.primary}`}
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

const AllProjectsBauhaus = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const pageRef = useRef(null);

  useEffect(() => {
    pageRef.current?.scrollTo?.(0, 0);
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
      sortDate: new Date("2025-01-01"),
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Personal portfolio website built from scratch showcasing projects, skills, education and experience with modern design.",
      image: portfoliolight,
      category: "Web App",
      keyTech: ["React", "CSS", "Vite"],
      sourceCodeUrl: "https://github.com/Ariff1422/Portfolio-Website",
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
      sortDate: new Date("2025-04-01"),
    },
    {
      id: 5,
      title: "Ethical Brand Guide",
      description:
        "Next.js and Supabase web dashboard that aggregates ESG data with a browser extension for e-commerce ethical scoring.",
      image: ebg,
      imagePosition: "center top",
      category: "Web App",
      keyTech: ["Next.js", "Supabase", "Python"],
      sourceCodeUrl: "https://github.com/ABJV-LifeHack-2025/LifeHack-2025/",
      sortDate: new Date("2025-06-01"),
    },
    {
      id: 6,
      title: "Psonia - For Smarter Shoppers",
      description:
        "Intelligent web application optimizing financial benefits, cost transparency, and notifications for online shoppers.",
      image: psonia,
      imagePosition: "center top",
      category: "Web App",
      keyTech: ["Node.js", "Selenium", "ML"],
      sourceCodeUrl: "https://github.com/Ariff1422/Psonia",
      liveUrl: "https://psonia-five.vercel.app",
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
      sortDate: new Date("2025-08-15"),
    },
    {
      id: 8,
      title: "Verialgo - Bare-Metal SoC & Algorithm Engine",
      description:
        "Fully synchronous bare-metal FPGA SoC built entirely in Verilog HDL, visualizing Merge Sort and Cocktail Sort as parallelised hardware FSMs with a custom Delta Animation Buffer and SPI OLED rendering pipeline.",
      image: verialgo,
      category: "Hardware",
      keyTech: ["Verilog", "FPGA", "Dual-Port Block RAM"],
      sourceCodeUrl: "https://github.com/Ariff1422/Verialgo",
      sortDate: new Date("2025-10-01"),
    },
    {
      id: 9,
      title: "Baymax - Dual-MCU RTOS Study Monitor",
      description:
        "Dual-microcontroller IoT study session monitor running FreeRTOS across an NXP MCXC444 and ESP32-S2, with EMA-filtered environmental sensing, Google Gemini-generated study reports, and real-time Telegram notifications.",
      image: baymax,
      category: "Hardware",
      keyTech: ["C", "FreeRTOS", "ESP32-S2", "MCXC444"],
      sourceCodeUrl: "https://github.com/vet3whale/CG2271-RTOS-Baymax",
      sortDate: new Date("2026-03-01"),
    },
    {
      id: 10,
      title: "Rosetta - TinyFish Pre-Accelerator Hackathon",
      description:
        "AI agent pipeline that navigates travel booking sites end-to-end using the TinyFish web-scraping API, surfacing true all-in prices by exposing hidden taxes, fees, and checkout surcharges.",
      image: rosetta,
      category: "ML/AI",
      keyTech: ["Next.js", "TypeScript", "Supabase", "TinyFish API"],
      sourceCodeUrl: "https://github.com/Ariff1422/Rosetta",
      sortDate: new Date("2026-04-01"),
    },
    {
      id: 11,
      title: "Veritas.ai - Autonomous Credit Assessment Pipeline",
      description:
        "Autonomous multi-agent RAG pipeline orchestrated with LangGraph that analyses real-time SEC filings and market data to generate institutional-grade credit assessment reports with risk factors and recommendations.",
      image: veritasAi,
      imagePosition: "center top",
      category: "ML/AI",
      keyTech: ["Python", "LangGraph", "ChromaDB", "Claude"],
      sourceCodeUrl: "https://github.com/Ariff1422/Veritas.ai",
      sortDate: new Date("2026-05-01"),
    },
    {
      id: 12,
      title: "Arc - ML-Powered Trading Signal Engine",
      description:
        "Data pipeline ingesting 20 years of daily OHLCV data across 58 equities, ETFs, and Bitcoin, engineering 14+ normalised asset-agnostic features; currently building a C++ SIMD/AVX2 feature engine, a PyTorch asset embedding layer, and HMM-based regime detection for a multi-asset signal model.",
      category: "ML/AI",
      keyTech: ["C++", "Python", "PyTorch"],
      sortDate: new Date("2026-05-15"),
      inProgress: true,
    },
  ];

  const categories = ["All", "Web App", "Hardware", "ML/AI"];

  const filteredProjects = projects
    .filter((project) => {
      if (activeFilter !== "All" && project.category !== activeFilter) {
        return false;
      }
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
    .sort((a, b) =>
      sortOrder === "newest" ? b.sortDate - a.sortDate : a.sortDate - b.sortDate
    );

  return (
    <div ref={pageRef} className={styles.page}>
      <div className={styles.pageBacking} />
      <div className={styles.edgeBand} aria-hidden="true" />
      <div className={`${styles.maskCircle} ${styles.maskCircle1}`} aria-hidden="true" />
      <div className={`${styles.maskCircle} ${styles.maskCircle2}`} aria-hidden="true" />
      <div className={`${styles.maskCircle} ${styles.maskCircle3}`} aria-hidden="true" />
      <div className={`${styles.maskCircle} ${styles.maskCircle4}`} aria-hidden="true" />
      <div className={`${styles.maskCircle} ${styles.maskCircle5}`} aria-hidden="true" />
      <div className={styles.pageInner}>
        <Link to="/" className={styles.backButton}>
          ← Back to Home
        </Link>

        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Portfolio</span>
          <h1 className={styles.heroTitle}>All Projects</h1>
          <p className={styles.heroSubtitle}>
            Explore {projects.length} projects across Web Applications and
            Hardware Engineering
          </p>
        </div>

        <div className={styles.searchWrapper}>
          <svg
            className={styles.searchIcon}
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
              stroke="#111"
              strokeWidth="2"
            />
            <path
              d="M19 19L14.65 14.65"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <input
            className={styles.searchInput}
            placeholder="Search projects by name, description, or technology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className={styles.controlsRow}>
          <select
            className={styles.filterSelect}
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
                {category !== "All"
                  ? ` (${projects.filter((p) => p.category === category).length})`
                  : ` (${projects.length})`}
              </option>
            ))}
          </select>
          <select
            className={styles.sortSelect}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Sort: Newest First</option>
            <option value="oldest">Sort: Oldest First</option>
          </select>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjectsBauhaus;
