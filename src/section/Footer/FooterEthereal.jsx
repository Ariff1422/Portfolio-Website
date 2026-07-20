import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./FooterEthereal.module.css";

function FooterEthereal() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <p className={styles.sign}>until the next quiet thing</p>
        <p className={styles.fine}>© 2026 ariff muhammed</p>
      </div>
      <div className={styles.footerIcons}>
        <a
          href="https://www.linkedin.com/in/ariff-muhammed-ahsan/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Ariff1422"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a href="mailto:ariffahsan@gmail.com" aria-label="Email">
          <MdEmail />
        </a>
      </div>
    </footer>
  );
}

export default FooterEthereal;
