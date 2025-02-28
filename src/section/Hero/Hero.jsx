import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/AriffM_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme } = useTheme();

  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.heroImageContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Ariff Muhammed"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ariff
          <br />
          Muhammed
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a
            href="https://github.com/Ariff1422"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ariff-muhammed-ahsan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Crafting seamless, responsive, and user-friendly experiences—one pixel
          at a time.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
