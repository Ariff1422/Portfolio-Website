import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./PageTransition.module.css";

function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setDisplayLocation(location);
      setTransitionStage("fadeIn");
      // Scroll to top on page change
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      className={`${styles.pageTransition} ${styles[transitionStage]}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
}

export default PageTransition;
