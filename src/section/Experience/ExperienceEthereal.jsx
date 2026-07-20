import { useState } from "react";
import styles from "./ExperienceEthereal.module.css";
import careerContactLogo from "../../assets/careercontact_logo.jpeg";
import synapxeLogo from "../../assets/synapxe_logo.png";

const EXPERIENCES = [
  {
    id: "synapxe",
    date: "Jun 2026 - Dec 2026",
    title: "AI Engineer Intern — Synapxe",
    role: "Data aNalytics and Ai (DNA)",
    logo: synapxeLogo,
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
    title: "Career Contact — Floral Horizon",
    role: "UX/UI Designer",
    logo: careerContactLogo,
    bullets: [
      "Trained in UX/UI Design fundamentals through Career Contact's inaugural internship program",
      "Redesigned Floral Horizon's website and social media content, improving brand consistency and engagement",
      "Delivered Bengawan Solo website redesign using Wix as capstone project",
    ],
    tech: ["Figma", "Canva", "Wix"],
  },
];

function ExperienceEthereal() {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>experience</span>
          <h2 className={styles.sectionTitle}>work experience</h2>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className={styles.expCard}>
                <img src={exp.logo} alt={exp.title} className={styles.expLogo} />
                <div className={styles.expBody}>
                  <div className={styles.expSummary}>
                    <div>
                      <span className={styles.expDate}>{exp.date}</span>
                      <h3 className={styles.expTitle}>{exp.title}</h3>
                      <p className={styles.expRole}>{exp.role}</p>
                    </div>
                    <button
                      type="button"
                      className={styles.expandBtn}
                      onClick={() => toggle(exp.id)}
                      aria-expanded={isExpanded}
                      aria-label={isExpanded ? "Hide details" : "Show details"}
                    >
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
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
                        {exp.tech.map((tech, idx) => (
                          <span key={tech}>
                            {tech}
                            {idx < exp.tech.length - 1 && <i aria-hidden="true"> · </i>}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceEthereal;
