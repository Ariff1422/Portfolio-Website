// src/section/Navbar/Navbar.js
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">AM</Link>
      </div>

      <div className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <Link to="/" className={styles.navLink} onClick={closeMenu}>
          Home
        </Link>
        <Link to="/projects" className={styles.navLink} onClick={closeMenu}>
          Projects
        </Link>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.themeToggle}>
          <img
            src={themeIcon}
            alt="Theme toggle"
            onClick={toggleTheme}
            className={styles.themeIcon}
          />
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <div
            className={`${styles.bar} ${menuOpen ? styles.active : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${menuOpen ? styles.active : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${menuOpen ? styles.active : ""}`}
          ></div>
        </div>
      </div>

      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;
