import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./HeroEthereal.module.css";
import CV from "../../assets/AriffM_Resume.pdf";
import ResumeModal from "../../common/ResumeModal";

function HeroEthereal() {
  const [currentRole, setCurrentRole] = useState(0);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const roles = [
    "computer engineer",
    "full-stack developer",
    "fpga engineer",
    "ai / ml engineer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>
          <span className={styles.dot} />
          quietly open to new work
        </span>

        <p className={styles.greeting}>hi, i'm</p>
        <div className={styles.nameGlow} aria-hidden="true" />
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
          Building at the edge of hardware and intelligence — held gently,
          considered carefully. Based in Singapore.
        </p>

        <div className={styles.actions}>
          <button
            onClick={() => setShowResumeModal(true)}
            className={`${styles.btn} ${styles.primary}`}
          >
            résumé
          </button>
          <a href="#projects" className={styles.btn}>
            view projects ↓
          </a>
          <a
            href="https://github.com/Ariff1422"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.iconOnly}`}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ariff-muhammed-ahsan/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.iconOnly}`}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
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

export default HeroEthereal;
