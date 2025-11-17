import React, { useState, useEffect } from "react";
import styles from "./PageLoader.module.css";

const PageLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Lock body scroll during loading to prevent scrollbar shift
    document.body.style.overflow = "hidden";

    // Simulate minimum loading time for effect
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsLoading(false);
        // Restore scroll after loader is gone
        document.body.style.overflow = "";
      }, 500);
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (isLoading) {
    return (
      <div className={`${styles.loader} ${isFading ? styles.fadeOut : ""}`}>
        <div className={styles.loaderContent}>
          <div className={styles.logoContainer}>
            <div className={styles.ring}></div>
            <div className={styles.ring}></div>
            <div className={styles.ring}></div>
            <span className={styles.initials}>AM</span>
          </div>
          <div className={styles.loadingText}>
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>
        </div>
      </div>
    );
  }

  return <div className={styles.pageContent}>{children}</div>;
};

export default PageLoader;
