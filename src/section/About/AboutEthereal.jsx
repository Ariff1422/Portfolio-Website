import styles from "./AboutEthereal.module.css";

function AboutEthereal() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>about</span>
          <h2 className={styles.sectionTitle}>who i am</h2>
        </div>

        <div className={styles.aboutCard}>
          <p className={styles.aboutText}>
            I'm a <em>Computer Engineering undergraduate at NUS</em> (Class of
            2028), drawn to building intelligent systems — from multi-agent AI
            pipelines and RAG architectures to bare-metal hardware design.
          </p>
          <p className={styles.aboutText}>
            Currently interning at <em>Synapxe as an AI Engineer</em>, working
            on production-scale RAG systems for Singapore's national
            healthcare platform.
          </p>
          <p className={styles.aboutText}>
            Open to <em>Summer 2027 internships and part-time roles</em>{" "}
            during the 2026/2027 academic semester. If something you're
            building calls for careful engineering, I'd love to hear about it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutEthereal;
