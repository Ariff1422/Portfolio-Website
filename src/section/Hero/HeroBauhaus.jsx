import { useState, useEffect } from "react";
import styles from "./HeroBauhaus.module.css";
import CV from "../../assets/AriffM_Resume.pdf";
import ResumeModal from "../../common/ResumeModal";

function HeroBauhaus() {
  const [currentRole, setCurrentRole] = useState(0);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const roles = [
    "Computer Engineer",
    "Full-Stack Developer",
    "FPGA Engineer",
    "AI/ML Engineer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.secBacking} />
      <div className={styles.edgeBandTop} aria-hidden="true" />
      <div className={styles.edgeBandBottom} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.shapeCircle} />
        <div className={styles.shapeTriangle} />
        <div className={styles.shapeSquare} />

        <div className={styles.statusLine}>
          <span className={styles.statusDot} />
          <span className={styles.statusText}>Available for opportunities</span>
        </div>

        <div className={styles.introBlock}>
          <div className={styles.lineAccent} aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <span className={styles.greeting}>Hi, I'm</span>
          <h1 className={styles.name}>Ariff Muhammed</h1>

          <div className={styles.roleContainer}>
            <div className={styles.roleWrapper}>
              {roles.map((role, index) => (
                <div
                  key={role}
                  className={`${styles.role} ${
                    index === currentRole ? styles.roleActive : ""
                  }`}
                >
                  {role}
                </div>
              ))}
            </div>
          </div>

          <p className={styles.description}>
            Building innovative solutions at the intersection of hardware and
            software, based in Singapore.
          </p>

          <div className={styles.actionsBlock}>
            <div className={styles.ctaRow}>
              <button
                onClick={() => setShowResumeModal(true)}
                className={`${styles.linkBtn} ${styles.primary}`}
              >
                Resume
              </button>
              <a href="#projects" className={`${styles.linkBtn} ${styles.accent}`}>
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M7 13L10 16L13 13M10 16V6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                View Projects
              </a>
            </div>

            <div className={styles.iconRow}>
              <a
                href="https://github.com/Ariff1422"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkBtn} ${styles.iconOnly}`}
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.28 5.68.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ariff-muhammed-ahsan/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkBtn} ${styles.iconOnly}`}
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.skillsList}>
            {["Python", "React", "TypeScript", "PyTorch", "Verilog", "PostgreSQL"].map(
              (skill) => (
                <span key={skill} className={styles.skillItem}>
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
        resumeUrl={CV}
      />
    </section>
  );
}

export default HeroBauhaus;
