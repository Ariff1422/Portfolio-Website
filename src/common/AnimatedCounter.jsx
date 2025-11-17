import { useState, useEffect, useRef } from "react";
import styles from "./AnimatedCounter.module.css";

const Counter = ({ end, duration = 2000, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div ref={counterRef} className={styles.counter}>
      <div className={styles.numberWrapper}>
        <span className={styles.number}>{count}</span>
        <span className={styles.suffix}>{suffix}</span>
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

function AnimatedCounter() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.statsBubble1} />
        <div className={styles.statsBubble2} />

        <div className={styles.statsGrid}>
          <Counter end={7} suffix="+" label="Projects Completed" />
          <Counter end={2} suffix="" label="Hackathons" />
          <Counter end={10} suffix="+" label="Technologies" />
          <Counter end={1} suffix="" label="Year Experience" />
        </div>
      </div>
    </section>
  );
}

export default AnimatedCounter;
