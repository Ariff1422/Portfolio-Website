import styles from "./JdmBackground.module.css";

function JdmBackground() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.speedStripeTopLeft} />
      <div className={styles.speedStripeBottomRight} />
      <div className={styles.hazardBarLeft} />
      <div className={styles.hazardBarRight} />
      <span className={styles.cornerBracketTL}>┌</span>
      <span className={styles.cornerBracketTR}>┐</span>
      <span className={styles.cornerBracketBL}>└</span>
      <span className={styles.cornerBracketBR}>┘</span>
      <span className={styles.watermark}>システム</span>
    </div>
  );
}

export default JdmBackground;
