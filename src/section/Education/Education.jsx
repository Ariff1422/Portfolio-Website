import React, { useState } from "react";
import { useTheme } from "../../common/ThemeContext"; // Import theme
import styles from "./EducationStyles.module.css";
import careerContactLogo from "../../assets/careercontact_logo.jpeg";
import NusLogo from "../../assets/nus_logo_full-vertical.jpg";
import njclogo from "../../assets/njc.jpeg";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const { theme } = useTheme(); // Get current theme

  return (
    <div
      className={`${styles.resumeContainer} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      {/* Tabs */}
      <div className={styles.tabsContainer}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "education" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("education")}
        >
          Education
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "work" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("work")}
        >
          Work
        </button>
        <div
          className={styles.tabIndicator}
          style={{
            transform:
              activeTab === "education" ? "translateX(0)" : "translateX(100%)",
          }}
        />
      </div>

      {/* Work Content */}
      {activeTab === "work" && (
        <div className={styles.tabContent}>
          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>

            {/* Career Contact */}
            <div className={styles.experienceItem}>
              <div className={styles.companyLogo}>
                <img src={careerContactLogo} alt="Career Contact" />
              </div>
              <div className={styles.dateRange}>Nov 2020 - Dec 2020</div>
              <h2 className={styles.companyName}>
                Career Contact - Floral Horizon
              </h2>
              <h3 className={styles.jobTitle}>UX/UI Designer</h3>
              <ul className={styles.achievements}>
                <li>
                  Learned UX/UI Design from industry professionals during the
                  inaugural internship program with Career Contact.
                </li>
                <li>
                  Collaborated with a team to improve Floral Horizon’s social
                  media presence by redesigning their website and Instagram
                  posts/stories for better organization and brand consistency.
                  (Non-code)
                </li>
                <li>
                  Redesigned the webpage of Bengawan Solo using Wix for the
                  final project presentation with Career Contact. (Non-code)
                </li>
              </ul>
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
      )}

      {/* Education Content */}
      {activeTab === "education" && (
        <div className={styles.tabContent}>
          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>

            {/* National University of Singapore */}
            <div className={styles.experienceItem}>
              <div className={styles.companyLogo}>
                <img src={NusLogo} alt="NUS Logo" />
              </div>
              <div className={styles.dateRange}>Aug 2024 - Present</div>
              <h2 className={styles.companyName}>
                National University of Singapore
              </h2>
              <h3 className={styles.jobTitle}>
                BEng in Computer Engineering (Hons)
              </h3>
              <ul className={styles.achievements}>
                <li>GPA: 4.64/5.0</li>
                <li>Pursuing a Minor in Data Analytics</li>
                <li>NUS Hack & Roll 2025: Top 15</li>
                <li>
                  Relevant Courses Completed: Engineering Principles and
                  Practices, Data Structures and Algorithms
                </li>
              </ul>
            </div>

            {/* National Junior College */}
            <div className={styles.experienceItem}>
              <div className={styles.companyLogo}>
                <img src={njclogo} alt="National Junior College" />
              </div>
              <div className={styles.dateRange}>Jan 2016 - Nov 2021</div>
              <h2 className={styles.companyName}>National Junior College</h2>
              <h3 className={styles.jobTitle}>IP Programme & A-Levels</h3>
              <ul className={styles.achievements}>
                <li>
                  Served as the Induction and Development Officer for the Guitar
                  Ensemble and represented NJC in the Singapore Youth Festival
                  and at Hong Kong Disneyland.
                </li>
                <li>
                  Achieved distinction in Trinity College Music Examination for
                  Guitar Ensemble and performed at the NJC Guitar Ensemble’s
                  Reverie concerts.
                </li>
                <li>
                  Competed in the Singapore Maths Olympiad and Australian
                  Mathematics Competition, earning multiple awards, and
                  represented NJC in the Singapore Junior Chemistry Olympiad.
                </li>
                <li>
                  Participated in research projects such as the Spire Program
                  and ESTAR Programme, and presented on the Agri-tech Facility
                  during College Day to Minister-of-State for Environment.
                </li>
                <li>
                  Member of the 53rd Student Council and the Student Welfare
                  Action Team, planning and executing events like Friendship
                  Week and Welcome Back.
                </li>
                <li>
                  Spearheaded the Publicity Team for the 2021 Senior High Open
                  House as part of the Student Council.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
