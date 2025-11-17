import { useState, useEffect } from "react";
import styles from "./HeroRedesigned.module.css";
import heroImg from "../../assets/hero-img.png";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/AriffM_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function HeroRedesigned() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Computer Engineer",
    "Full-Stack Developer",
    "Problem Solver",
    "Tech Innovator",
  ];

  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Role cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Animated mesh gradient background */}
      <div className={styles.meshGradient}>
        <div
          className={styles.gradient1}
          style={{
            transform: `translate(${mousePosition.x * 0.02}%, ${
              mousePosition.y * 0.02
            }%)`,
          }}
        />
        <div
          className={styles.gradient2}
          style={{
            transform: `translate(${mousePosition.x * -0.015}%, ${
              mousePosition.y * -0.015
            }%)`,
          }}
        />
        <div
          className={styles.gradient3}
          style={{
            transform: `translate(${mousePosition.x * 0.01}%, ${
              mousePosition.y * -0.01
            }%)`,
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className={styles.gridOverlay} />

      {/* Content Container - Full Width */}
      <div className={styles.container}>
        {/* Text Content - Left Side */}
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for opportunities
          </div>

          {/* Main Heading */}
          <h1 className={styles.heading}>
            <span className={styles.greeting}>Hi, I'm</span>
            <span className={styles.name}>
              <span className={styles.nameGradient}>Ariff Muhammed</span>
            </span>
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
            software. Passionate about creating seamless digital experiences
            that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className={styles.actions}>
            <a href={CV} download className={styles.primaryBtn}>
              <span>Download Resume</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 13L10 3M10 13L6 9M10 13L14 9M3 17H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#projects" className={styles.secondaryBtn}>
              <span>View Projects</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7 13L10 16L13 13M10 16V6M17 10V17H3V10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Social Links */}
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

        {/* Image - Right Side with glassmorphism */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            {/* Floating orbs */}
            <div className={styles.orb1} />
            <div className={styles.orb2} />
            <div className={styles.orb3} />

            {/* Glass card */}
            <div className={styles.glassCard}>
              <img
                src={heroImg}
                alt="Ariff Muhammed"
                className={styles.profileImage}
              />
            </div>

            {/* Decorative elements */}
            <div className={styles.decorCircle1} />
            <div className={styles.decorCircle2} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
      </div>
    </section>
  );
}

export default HeroRedesigned;
