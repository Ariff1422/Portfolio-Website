import { useState, useEffect } from "react";
import styles from "./HeroEnhanced.module.css";
import heroImg from "../../assets/hero-img.png";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/AriffM_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function HeroEnhanced() {
  const { theme } = useTheme();
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const roles = [
    "Software Developer",
    "Computer Engineer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];

      if (!isDeleting) {
        if (currentIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentRole.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum]);

  // Generate particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 20,
    size: Math.random() * 4 + 2,
  }));

  return (
    <section id="hero" className={styles.container}>
      {/* Particle Background */}
      <div className={styles.particleContainer}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={styles.particle}
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Animated Background Gradient */}
      <div className={styles.gradientBg}></div>

      <div className={styles.content}>
        {/* Image with 3D tilt effect */}
        <div className={styles.heroImageContainer}>
          <div className={styles.imageWrapper}>
            <img
              src={heroImg}
              className={styles.hero}
              alt="Profile picture of Ariff Muhammed"
            />
            <div className={styles.imageGlow}></div>
          </div>
        </div>

        {/* Info Section */}
        <div className={styles.info}>
          <div className={styles.nameContainer}>
            <h1 className={styles.name}>
              <span className={styles.firstName}>Ariff</span>
              <span className={styles.lastName}>Muhammed</span>
            </h1>
          </div>

          <h2 className={styles.role}>
            <span className={styles.roleText}>{displayText}</span>
            <span className={styles.cursor}>|</span>
          </h2>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/Ariff1422"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ariff-muhammed-ahsan/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </div>

          <p className={styles.description}>
            Crafting seamless, responsive, and user-friendly experiences—one
            pixel at a time.
          </p>

          <div className={styles.ctaButtons}>
            <a href={CV} download className={styles.primaryButton}>
              <span>Download Resume</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 14L10 4M10 14L6 10M10 14L14 10M4 17H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#projects" className={styles.secondaryButton}>
              View Projects
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className={styles.scrollIndicator}>
            <div className={styles.mouse}>
              <div className={styles.wheel}></div>
            </div>
            <span>Scroll Down</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroEnhanced;
