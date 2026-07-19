import { useState } from "react";
import styles from "./ExperienceBauhaus.module.css";
import careerContactLogo from "../../assets/careercontact_logo.jpeg";
import synapxeLogo from "../../assets/synapxe_logo.png";

const EXPERIENCES = [
  {
    id: "synapxe",
    date: "Jun 2026 - Dec 2026",
    title: "AI Engineer Intern - Synapxe",
    role: "Data aNalytics and Ai (DNA)",
    dateColor: "#1d3557",
    logo: synapxeLogo,
    logoBg: "#ffffff",
    bullets: [
      "Working on Synapxe's production Tandem/In-SYNc platform, Singapore's national healthcare GenAI system",
      "Building and optimising the data ingestion pipeline feeding multi-agent AI workflows for context-aware retrieval across internal healthcare documents at scale",
      "Applying agentic AI, RAG, and query decomposition techniques within an enterprise LLM stack",
    ],
    tech: ["Python", "LangChain", "LangGraph", "RAG", "Azure"],
  },
  {
    id: "career-contact",
    date: "Nov 2020 - Dec 2020",
    title: "Career Contact - Floral Horizon",
    role: "UX/UI Designer",
    dateColor: "#e63946",
    logo: careerContactLogo,
    logoBg: "#f4a400",
    bullets: [
      "Trained in UX/UI Design fundamentals through Career Contact's inaugural internship program",
      "Redesigned Floral Horizon's website and social media content, improving brand consistency and engagement",
      "Delivered Bengawan Solo website redesign using Wix as capstone project",
    ],
    tech: ["Figma", "Canva", "Wix"],
  },
];

const ExperienceBauhaus = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.secBacking} />
      <div className={styles.circleAccent} aria-hidden="true" />
      <div className={styles.circleAccent2} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Experience</span>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <span
                    className={styles.timelineDot}
                    style={{ background: exp.dateColor }}
                  />
                </div>

                <div className={styles.expCard}>
                  <div
                    className={styles.expLogo}
                    style={{ background: exp.logoBg }}
                  >
                    <img src={exp.logo} alt={exp.title} />
                  </div>
                  <div className={styles.expBody}>
                    <div className={styles.expSummary}>
                      <div>
                        <span
                          className={styles.expDate}
                          style={{ background: exp.dateColor }}
                        >
                          {exp.date}
                        </span>
                        <h3 className={styles.expTitle}>{exp.title}</h3>
                        <p className={styles.expRole}>{exp.role}</p>
                      </div>
                      <button
                        type="button"
                        className={`${styles.expandBtn} ${
                          isExpanded ? styles.expandBtnOpen : ""
                        }`}
                        onClick={() => toggle(exp.id)}
                        aria-expanded={isExpanded}
                        aria-label={
                          isExpanded ? "Hide details" : "Show details"
                        }
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    {isExpanded && (
                      <>
                        <ul className={styles.expList}>
                          {exp.bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                          ))}
                        </ul>
                        <div className={styles.techTags}>
                          {exp.tech.map((tech) => (
                            <span key={tech} className={styles.techTag}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceBauhaus;
