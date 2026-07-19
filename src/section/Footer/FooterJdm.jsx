import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./FooterJdm.module.css";

function FooterJdm() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <p>© 2026 Ariff Muhammed — All rights reserved.</p>
        <span className={styles.terminalLine}>
          ［STATUS: ONLINE］ (・_・) ｷﾀｷﾀ！
        </span>
      </div>
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

export default FooterJdm;
