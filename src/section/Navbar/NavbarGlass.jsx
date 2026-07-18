import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarGlass.module.css";

function NavbarGlass() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContent}>
        {/* Logo bubble */}
        <div className={styles.logo}>
          <Link to="/" onClick={closeMenu}>
            <div className={`${styles.glass} ${styles.logoGlass}`}>
              <span className={styles.logoText}>AM</span>
            </div>
          </Link>
        </div>

        {/* Nav Links bubble */}
        <div className={`${styles.glass} ${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <Link to="/" className={styles.navLink} onClick={closeMenu}>
            <div className={styles.linkGlass}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M2 7L9 2L16 7V15C16 15.5304 15.7893 16.0391 15.4142 16.4142C15.0391 16.7893 14.5304 17 14 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V7Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Home</span>
            </div>
          </Link>
          <Link to="/projects" className={styles.navLink} onClick={closeMenu}>
            <div className={styles.linkGlass}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M7 2H3C2.5 2 2 2.5 2 3V7C2 7.5 2.5 8 3 8H7C7.5 8 8 7.5 8 7V3C8 2.5 7.5 2 7 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 2H11C10.5 2 10 2.5 10 3V7C10 7.5 10.5 8 11 8H15C15.5 8 16 7.5 16 7V3C16 2.5 15.5 2 15 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 10H3C2.5 10 2 10.5 2 11V15C2 15.5 2.5 16 3 16H7C7.5 16 8 15.5 8 15V11C8 10.5 7.5 10 7 10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 10H11C10.5 10 10 10.5 10 11V15C10 15.5 10.5 16 11 16H15C15.5 16 16 15.5 16 15V11C16 10.5 15.5 10 15 10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Projects</span>
            </div>
          </Link>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`${styles.glass} ${styles.hamburgerGlass}`}>
              <span
                className={`${styles.bar} ${menuOpen ? styles.active : ""}`}
              />
              <span
                className={`${styles.bar} ${menuOpen ? styles.active : ""}`}
              />
              <span
                className={`${styles.bar} ${menuOpen ? styles.active : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={closeMenu} />
      )}
    </nav>
  );
}

export default NavbarGlass;
