import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./ResumeModal.module.css";

function ResumeModal({ isOpen, onClose, resumeUrl }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      setIsLoading(true);
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Resume Preview</h2>
          <div className={styles.actions}>
            <a
              href={resumeUrl}
              download
              className={styles.downloadButton}
              title="Download Resume"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 13L10 3M10 13L6 9M10 13L14 9M3 17H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Download</span>
            </a>
            <button
              onClick={onClose}
              className={styles.closeButton}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.content}>
          {isLoading && (
            <div className={styles.loader}>
              <div className={styles.spinner} />
              <span>Loading resume...</span>
            </div>
          )}
          <iframe
            src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
            title="Resume Preview"
            className={styles.pdfFrame}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default ResumeModal;
