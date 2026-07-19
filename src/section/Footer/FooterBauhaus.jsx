import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./FooterBauhaus.module.css";

function FooterBauhaus() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2026 Ariff Muhammed — All rights reserved.
      </p>
      <div className={styles.footerIcons}>
        <a
          href="https://www.linkedin.com/in/ariff-muhammed-ahsan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Ariff1422"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:ariffahsan@gmail.com">
          <MdEmail />
        </a>
      </div>
    </footer>
  );
}

export default FooterBauhaus;
