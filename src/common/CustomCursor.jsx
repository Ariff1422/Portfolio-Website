import { useEffect, useState } from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick !== null ||
        target.classList.contains("hover") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Don't show custom cursor on mobile devices
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) return null;

  return (
    <>
      <div
        className={`${styles.cursor} ${isPointer ? styles.pointer : ""} ${
          isVisible ? styles.visible : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`${styles.cursorFollower} ${
          isPointer ? styles.pointer : ""
        } ${isVisible ? styles.visible : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
