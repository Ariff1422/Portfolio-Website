import React, { useState } from "react";
import { useTheme } from "../../common/ThemeContext";
import styles from "./EducationGlass.module.css";
import careerContactLogo from "../../assets/careercontact_logo.jpeg";
import NusLogo from "../../assets/nus_logo_full-vertical.jpg";
import njclogo from "../../assets/njc.jpeg";

const EducationGlass = () => {
  const [activeTab, setActiveTab] = useState("education");
  const { theme } = useTheme();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="education" className={styles.educationSection}>
      {/* Floating bubbles */}
      <div className={styles.sectionBubble1} />
      <div className={styles.sectionBubble2} />

      {/* Section Container */}
      <div className={styles.container}>
        {/* Tabs with glass effect */}
        <div className={styles.tabsGlass}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "education" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("education")}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2L2 7L10 12L18 7L10 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L10 17L18 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Education</span>
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "work" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("work")}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M13 2H7C6.5 2 6 2.5 6 3V5H14V3C14 2.5 13.5 2 13 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 5H17C17.5 5 18 5.5 18 6V16C18 16.5 17.5 17 17 17H3C2.5 17 2 16.5 2 16V6C2 5.5 2.5 5 3 5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Work Experience</span>
          </button>
          <div
            className={`${styles.activeIndicator} ${
              activeTab === "work" ? styles.indicatorWork : ""
            }`}
            style={{
              transform:
                activeTab === "education"
                  ? "translateX(0)"
                  : "translateX(100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Work Content */}
          {activeTab === "work" && (
            <div className={styles.timeline}>
              {/* Work Experience Card */}
              <div className={styles.timelineItem}>
                <div className={styles.cardGlass}>
                  {/* Logo Badge */}
                  <div className={styles.logoBadge}>
                    <img src={careerContactLogo} alt="Career Contact" />
                  </div>

                  {/* Date Badge */}
                  <div className={styles.dateBadge}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 5V8L10 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    Nov 2020 - Dec 2020
                  </div>

                  {/* Content */}
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>
                      Career Contact - Floral Horizon
                    </h3>
                    <p className={styles.cardRole}>UX/UI Designer</p>

                    <ul className={styles.achievements}>
                      <li>
                        Trained in UX/UI Design fundamentals through Career
                        Contact's inaugural internship program
                      </li>
                      <li>
                        Redesigned Floral Horizon's website and social media
                        content, improving brand consistency and engagement
                      </li>
                      <li>
                        Delivered Bengawan Solo website redesign using Wix as
                        capstone project
                      </li>
                    </ul>

                    {/* Tech Tags */}
                    <div className={styles.techTags}>
                      {["Figma", "Canva", "Wix"].map((tech, index) => (
                        <span key={index} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Education Content */}
          {activeTab === "education" && (
            <div className={styles.timeline}>
              {/* NUS Card */}
              <div className={styles.timelineItem}>
                <div className={styles.cardGlass}>
                  {/* Logo Badge */}
                  <div className={styles.logoBadge}>
                    <img src={NusLogo} alt="NUS" />
                  </div>

                  {/* Date Badge */}
                  <div className={styles.dateBadge}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 5V8L10 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    Aug 2024 - Present
                  </div>

                  {/* Content */}
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>
                      National University of Singapore
                    </h3>
                    <p className={styles.cardRole}>
                      BEng in Computer Engineering (Hons)
                    </p>

                    <ul className={styles.achievements}>
                      <li>Current GPA: 4.54/5.0</li>
                      <li>Minor in Data Analytics</li>
                      <li>NUS Hack & Roll 2025 - Top 15 Finalist</li>
                      <li>DSTA BrainHack 2025 - Semifinalist</li>
                      <li>WorldQuant Challenge - Gold Medal</li>
                      <li>
                        Key Modules: Data Structures & Algorithms, Engineering
                        Principles and Practice
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* NJC Card */}
              <div className={styles.timelineItem}>
                <div className={styles.cardGlass}>
                  {/* Logo Badge */}
                  <div className={styles.logoBadge}>
                    <img src={njclogo} alt="National Junior College" />
                  </div>

                  {/* Date Badge */}
                  <div className={styles.dateBadge}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 5V8L10 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    Jan 2016 - Nov 2021
                  </div>

                  {/* Content */}
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>
                      National Junior College
                    </h3>
                    <p className={styles.cardRole}>IP Programme & A-Levels</p>

                    <ul className={styles.achievements}>
                      <li>
                        Guitar Ensemble - Induction & Development Officer;
                        performed at SYF and Hong Kong Disneyland
                      </li>
                      <li>
                        Trinity College Music Examination - Distinction; Reverie
                        concert performer
                      </li>
                      <li>
                        Singapore Maths Olympiad & Australian Mathematics
                        Competition - Multiple awards
                      </li>
                      <li>
                        Research Programs - Spire Program and ESTAR Programme
                        participant
                      </li>
                      <li>
                        53rd Student Council - Student Welfare Action Team
                        member
                      </li>
                      <li>
                        2021 Senior High Open House - Publicity Team Lead
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationGlass;
