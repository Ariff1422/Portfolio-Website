import { useState } from "react";
import styles from "./EducationJdm.module.css";
import NusLogo from "../../assets/nus_logo_full-vertical.jpg";
import njclogo from "../../assets/njc.jpeg";

const EDUCATION = [
  {
    id: "nus",
    date: "Aug 2024 - Present",
    dateColor: "#ff1e6e",
    title: "National University of Singapore",
    role: "BEng in Computer Engineering (Hons)",
    logo: NusLogo,
    logoBg: "#f5f0e6",
    details: [
      "Current GPA: 4.54/5.0",
      "Minor in Data Analytics",
      "NUS Hack & Roll 2025 - Top 15 Finalist",
      "DSTA BrainHack 2025 - Semifinalist",
      "WorldQuant Challenge - Gold Medal",
      "Key Modules: Data Structures & Algorithms, Engineering Principles and Practice",
    ],
  },
  {
    id: "njc",
    date: "Jan 2016 - Nov 2021",
    dateColor: "#00dcff",
    title: "National Junior College",
    role: "IP Programme & A-Levels",
    logo: njclogo,
    logoBg: "#f5f0e6",
    details: [
      "Guitar Ensemble - Induction & Development Officer; performed at SYF and Hong Kong Disneyland",
      "Trinity College Music Examination - Distinction; Reverie concert performer",
      "Singapore Maths Olympiad & Australian Mathematics Competition - Multiple awards",
      "Research Programs - Spire Program and ESTAR Programme participant",
      "53rd Student Council - Student Welfare Action Team member",
      "2021 Senior High Open House - Publicity Team Lead",
    ],
  },
];

const EducationJdm = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="education" className={styles.educationSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Education</span>
          <h2 className={styles.sectionTitle}>Education</h2>
        </div>

        {EDUCATION.map((edu) => {
          const isExpanded = expandedId === edu.id;
          return (
            <div key={edu.id} className={styles.eduCard}>
              <div
                className={styles.eduLogo}
                style={{ background: edu.logoBg }}
              >
                <img src={edu.logo} alt={edu.title} />
              </div>
              <div className={styles.eduBody}>
                <div className={styles.eduSummary}>
                  <div>
                    <span
                      className={styles.eduDate}
                      style={{ color: edu.dateColor }}
                    >
                      <span className={styles.bracket}>［</span>
                      {edu.date}
                      <span className={styles.bracket}>］</span>
                    </span>
                    <h3 className={styles.eduTitle}>{edu.title}</h3>
                    <p className={styles.eduRole}>{edu.role}</p>
                  </div>
                  <button
                    type="button"
                    className={`${styles.expandBtn} ${
                      isExpanded ? styles.expandBtnOpen : ""
                    }`}
                    onClick={() => toggle(edu.id)}
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
                  <ul className={styles.eduList}>
                    {edu.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationJdm;
