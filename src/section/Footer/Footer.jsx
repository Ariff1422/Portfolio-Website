import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./FooterStyles.module.css";
import { useTheme } from "../../common/ThemeContext";

function Footer() {
  const { theme, toggleTheme } = useTheme(); // Assuming you have a context to manage the theme

  return (
    <section className={styles.container} data-theme={theme}>
      <p>
        © 2025 Ariff Muhammed <br />
        All rights reserved.
      </p>
      <div className={styles.icons}>
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
    </section>
  );
}

export default Footer;
