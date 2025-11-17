import { useState, useEffect } from "react";
import styles from "./HeroGlass.module.css";
import heroImg from "../../assets/hero-img.png";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/AriffM_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";
import ResumeModal from "../../common/ResumeModal";

function HeroGlass() {
  const { theme } = useTheme();
  const [currentRole, setCurrentRole] = useState(0);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const roles = [
    "Computer Engineer",
    "Full-Stack Developer",
    "FPGA Engineer",
    "AI/ML Engineer",
  ];

  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  // Role cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {/* iOS-style floating bubbles */}
      <div className={styles.bubbleContainer}>
        <div className={styles.bubble1} />
        <div className={styles.bubble2} />
        <div className={styles.bubble3} />
        <div className={styles.bubble4} />
        <div className={styles.bubble5} />
      </div>

{/* Cursor bubble removed */}

      {/* Content Container */}
      <div className={styles.container}>
        {/* Glass Card for Content */}
        <div className={styles.contentGlass}>
          {/* Status Badge */}
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            Available for opportunities
          </div>

          {/* Main Heading */}
          <h1 className={styles.heading}>
            <span className={styles.greeting}>Hi, I'm</span>
            <span className={styles.name}>Ariff Muhammed</span>
          </h1>

          {/* Role with animated transition */}
          <div className={styles.roleContainer}>
            <div className={styles.roleWrapper}>
              {roles.map((role, index) => (
                <h2
                  key={role}
                  className={`${styles.role} ${
                    index === currentRole ? styles.roleActive : ""
                  }`}
                >
                  {role}
                </h2>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className={styles.description}>
            Building innovative solutions at the intersection of hardware and
            software. Creating seamless digital experiences that make a
            difference.
          </p>

          {/* CTA Buttons with glass effect */}
          <div className={styles.actions}>
            <button
              onClick={() => setShowResumeModal(true)}
              className={styles.glassBtnPrimary}
            >
              <span className={styles.btnContent}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2 6V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H16C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V14M6 10H18M18 10L14 6M18 10L14 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>View Resume</span>
              </span>
            </button>
            <a href="#projects" className={styles.glassBtnSecondary}>
              <span className={styles.btnContent}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7 13L10 16L13 13M10 16V6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>View Projects</span>
              </span>
            </a>
          </div>

          {/* Social Links with glass */}
          <div className={styles.social}>
            <a
              href="https://github.com/Ariff1422"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/ariff-muhammed-ahsan/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Glass Card for Image */}
        <div className={styles.imageGlass}>
          {/* Floating bubble decorations */}
          <div className={styles.imageBubble1} />
          <div className={styles.imageBubble2} />
          <div className={styles.imageBubble3} />

          <div className={styles.imageWrapper}>
            <img
              src={heroImg}
              alt="Ariff Muhammed"
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator with glass */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollGlass}>
          <div className={styles.scrollWheel} />
        </div>
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>

      {/* Resume Preview Modal */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
        resumeUrl={CV}
      />
    </section>
  );
}

export default HeroGlass;

