import styles from "./SkillsEthereal.module.css";

const SKILL_GROUPS = [
  {
    name: "languages",
    skills: ["C++", "Python", "C", "Verilog", "Java", "TypeScript", "SQL"],
  },
  {
    name: "frameworks",
    skills: ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "LangChain", "LangGraph", "React"],
  },
  {
    name: "databases",
    skills: ["PostgreSQL", "Supabase", "ChromaDB", "SQLite"],
  },
  {
    name: "devops / tools",
    skills: ["GitHub Actions", "Docker", "Linux/Unix", "Arduino", "FPGA Synthesis"],
  },
  {
    name: "eda / ic design",
    skills: ["Cadence Virtuoso", "Synopsys Design Compiler"],
  },
];

function SkillsEthereal() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>craft</span>
          <h2 className={styles.sectionTitle}>technical skills</h2>
        </div>

        <div className={styles.groupGrid}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.name} className={styles.groupCard}>
              <h3 className={styles.groupName}>{group.name}</h3>
              <div className={styles.skillList}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.skillItem}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsEthereal;
