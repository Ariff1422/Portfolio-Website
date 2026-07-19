import styles from "./AboutBauhaus.module.css";

function AboutBauhaus() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.secBacking} />
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>About</span>
          <h2 className={styles.sectionTitle}>Who I Am</h2>
        </div>

        <div className={styles.aboutCard}>
          <p className={styles.aboutText}>
            I'm a <strong className={styles.highlight}>Computer Engineering
            undergraduate at NUS (Class of 2028)</strong> with a passion for
            building intelligent systems — from{" "}
            <strong className={styles.highlight}>
              multi-agent AI pipelines and RAG architectures
            </strong>{" "}
            to{" "}
            <strong className={styles.highlight}>
              bare-metal hardware design
            </strong>
            . My work spans the full technical stack, and I'm driven by
            problems that reward rigorous thinking and careful engineering.
          </p>
          <p className={styles.aboutText}>
            Currently interning at{" "}
            <strong className={styles.highlight}>
              Synapxe as an AI Engineer
            </strong>
            , working on production-scale RAG systems for{" "}
            <strong className={styles.highlight}>
              Singapore's national healthcare platform
            </strong>
            .
          </p>
          <p className={styles.aboutText}>
            I'm actively looking for{" "}
            <strong className={styles.highlight}>
              Summer 2027 internships and part-time roles
            </strong>{" "}
            during the 2026/2027 academic semester (Jan 2027 onwards). If
            you're working on something interesting, I'd love to connect.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutBauhaus;
