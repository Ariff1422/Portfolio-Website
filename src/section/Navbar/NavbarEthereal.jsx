import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./NavbarEthereal.module.css";
import { useTheme } from "../../common/ThemeContext";

const THEME_META = {
  jdm: { code: "01_J2K", label: "J2K", short: "J2K" },
  bauhaus: { code: "02_BAU", label: "BAUHAUS", short: "BAU" },
  "mystical-western": { code: "03_WSTN", label: "WESTERN", short: "WSTN" },
  ethereal: { code: "04_ETHR", label: "ETHEREAL", short: "ETHR" },
};

// Quadrants always render in this fixed order regardless of which themes
// are actually built yet, so the selector reads as a complete 4-axis map.
const QUADRANT_ORDER = ["jdm", "bauhaus", "mystical-western", "ethereal"];

function MultiverseSelector({ theme, setTheme, themes, className, onSelect }) {
  return (
    <div
      className={`${styles.multiverseSelector} ${className}`}
      role="group"
      aria-label="Select theme"
    >
      <span className={styles.matrixCrosshair}>+</span>
      {QUADRANT_ORDER.map((id) => {
        const meta = THEME_META[id];
        const isBuilt = themes.includes(id);
        const isActive = theme === id;
        return (
          <button
            key={id}
            type="button"
            disabled={!isBuilt}
            onClick={() => {
              if (!isBuilt) return;
              setTheme(id);
              onSelect?.();
            }}
            className={`${styles.quadrantNode} ${
              isActive ? styles.quadrantActive : ""
            } ${!isBuilt ? styles.quadrantLocked : ""}`}
            aria-pressed={isActive}
            aria-label={
              isBuilt ? `Switch to ${meta.short} theme` : `${meta.short} (coming soon)`
            }
          >
            <span className={styles.quadCode}>{meta.code.toLowerCase()}</span>
            <span className={styles.quadLabel}>
              {isBuilt ? meta.label.toLowerCase() : "locked"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function NavbarEthereal() {
  const { theme, setTheme, themes } = useTheme();
  const { pathname } = useLocation();
  const [mobilePickerOpen, setMobilePickerOpen] = useState(false);
  const pickerRef = useRef(null);

  useEffect(() => {
    if (!mobilePickerOpen) return;

    function handlePointerDown(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setMobilePickerOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [mobilePickerOpen]);

  useEffect(() => {
    setMobilePickerOpen(false);
  }, [pathname]);

  return (
    <nav className={styles.navbar} ref={pickerRef}>
      {mobilePickerOpen && (
        <MultiverseSelector
          theme={theme}
          setTheme={setTheme}
          themes={themes}
          className={styles.mobilePopover}
          onSelect={() => setMobilePickerOpen(false)}
        />
      )}

      <div className={styles.navContent}>
        <Link to="/" className={styles.logo}>
          am
        </Link>

        <div className={styles.navLinks}>
          <Link
            to="/"
            className={`${styles.navLink} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            home
          </Link>
          <Link
            to="/projects"
            className={`${styles.navLink} ${
              pathname === "/projects" ? styles.active : ""
            }`}
          >
            projects
          </Link>
        </div>

        <div className={styles.socialLinks}>
          <a
            href="https://github.com/Ariff1422"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ariff-muhammed-ahsan/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ariffahsan@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <MdEmail />
          </a>
        </div>

        <MultiverseSelector
          theme={theme}
          setTheme={setTheme}
          themes={themes}
          className={styles.desktopOnly}
        />

        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMobilePickerOpen((open) => !open)}
          aria-expanded={mobilePickerOpen}
          aria-label="Select theme"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export default NavbarEthereal;
