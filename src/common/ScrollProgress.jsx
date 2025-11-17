import { useState, useEffect } from "react";
import styles from "./ScrollProgress.module.css";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
