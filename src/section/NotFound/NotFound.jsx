import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.bubble1} />
      <div className={styles.bubble2} />
      <div className={styles.bubble3} />

      <div className={styles.content}>
        <div className={styles.errorCode}>
          <span className={styles.four}>4</span>
          <span className={styles.zero}>0</span>
          <span className={styles.four}>4</span>
        </div>

        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          Oops! The page you're looking for seems to have wandered off into the
          digital void.
        </p>

        <div className={styles.actions}>
          <Link to="/" className={styles.homeButton}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M3 10L10 3L17 10M5 8V17H9V13H11V17H15V8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Back to Home</span>
          </Link>
          <Link to="/projects" className={styles.projectsButton}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7 3H4C3.5 3 3 3.5 3 4V8C3 8.5 3.5 9 4 9H8C8.5 9 9 8.5 9 8V4C9 3.5 8.5 3 7 3Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 3H12C11.5 3 11 3.5 11 4V8C11 8.5 11.5 9 12 9H16C16.5 9 17 8.5 17 8V4C17 3.5 16.5 3 16 3Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 11H4C3.5 11 3 11.5 3 12V16C3 16.5 3.5 17 4 17H8C8.5 17 9 16.5 9 16V12C9 11.5 8.5 11 7 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 11H12C11.5 11 11 11.5 11 12V16C11 16.5 11.5 17 12 17H16C16.5 17 17 16.5 17 16V12C17 11.5 16.5 11 16 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
