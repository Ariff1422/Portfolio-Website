import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarEnhanced.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";
import ScrollProgress from "../../common/ScrollProgress";

function NavbarEnhanced() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <ScrollProgress />
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <Link to="/" onClick={closeMenu}>
              <span className={styles.logoFirst}>A</span>
              <span className={styles.logoSecond}>M</span>
            </Link>
          </div>

          <div
            className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}
          >
            <Link to="/" className={styles.navLink} onClick={closeMenu}>
              <span className={styles.linkNumber}>01.</span>
              <span>Home</span>
            </Link>
            <Link to="/projects" className={styles.navLink} onClick={closeMenu}>
              <span className={styles.linkNumber}>02.</span>
              <span>Projects</span>
            </Link>
            <a href="#projects" className={styles.navLink} onClick={closeMenu}>
              <span className={styles.linkNumber}>03.</span>
              <span>Contact</span>
            </a>
          </div>

          <div className={styles.rightSection}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <img
                src={themeIcon}
                alt="Theme toggle"
                className={styles.themeIcon}
              />
            </button>

            <button
              className={styles.hamburger}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`${styles.bar} ${menuOpen ? styles.active : ""}`}
              />
              <span
                className={`${styles.bar} ${menuOpen ? styles.active : ""}`}
              />
              <span
                className={`${styles.bar} ${menuOpen ? styles.active : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </>
  );
}

export default NavbarEnhanced;
