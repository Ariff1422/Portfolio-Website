import React, { useState, useEffect } from "react";
import styles from "./PageLoader.module.css";

const PageLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // The loader is a full-screen overlay, so it doesn't need to also
    // lock body scroll -- doing so previously swallowed any click/anchor
    // jump (e.g. "View Projects") that happened during the loading
    // window, since the browser couldn't actually scroll yet and
    // nothing replayed that scroll once the lock lifted.
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={styles.pageContent}>{children}</div>
      {isLoading && (
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
      )}
    </>
  );
};

export default PageLoader;
