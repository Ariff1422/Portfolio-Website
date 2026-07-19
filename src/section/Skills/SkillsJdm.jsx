import {
  SiCplusplus,
  SiPython,
  SiC,
  SiTypescript,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiLangchain,
  SiReact,
  SiPostgresql,
  SiSupabase,
  SiSqlite,
  SiGithubactions,
  SiDocker,
  SiLinux,
  SiArduino,
} from "react-icons/si";
import { FaMicrochip } from "react-icons/fa6";
import styles from "./SkillsJdm.module.css";
import javaLogo from "../../assets/java_logo.png";
import chromadbLogo from "../../assets/chromadb.png";
import cadenceLogo from "../../assets/cadence.png";

const NEUTRAL = "#f5f0e6";
const PRIMARY_MARK = "◎";
const SECONDARY_MARK = "○";

const SKILL_GROUPS = [
  {
    name: "Languages",
    color: "#ff1e6e",
    skills: [
      { label: "C++", icon: SiCplusplus, iconColor: "#00599C", primary: true },
      { label: "Python", icon: SiPython, iconColor: "#3776AB", primary: true },
      { label: "C", icon: SiC, iconColor: "#A8B9CC" },
      { label: "Verilog", icon: FaMicrochip, iconColor: NEUTRAL, primary: true },
      { label: "Java", image: javaLogo },
      { label: "TypeScript", icon: SiTypescript, iconColor: "#3178C6" },
      { label: "SQL", icon: FaMicrochip, iconColor: NEUTRAL },
    ],
  },
  {
    name: "Frameworks",
    color: "#00dcff",
    skills: [
      { label: "PyTorch", icon: SiPytorch, iconColor: "#EE4C2C", primary: true },
      { label: "Scikit-learn", icon: SiScikitlearn, iconColor: "#F7931E" },
      { label: "Pandas", icon: SiPandas, iconColor: "#8899EE" },
      { label: "NumPy", icon: SiNumpy, iconColor: "#4D77CF" },
      { label: "LangChain", icon: SiLangchain, iconColor: "#3ECF8E", primary: true },
      { label: "LangGraph", icon: SiLangchain, iconColor: "#3ECF8E", primary: true },
      { label: "React", icon: SiReact, iconColor: "#61DAFB", primary: true },
    ],
  },
  {
    name: "Databases",
    color: "#ff8a3d",
    skills: [
      { label: "PostgreSQL", icon: SiPostgresql, iconColor: "#4169E1" },
      { label: "Supabase", icon: SiSupabase, iconColor: "#3ECF8E" },
      { label: "ChromaDB", image: chromadbLogo },
      { label: "SQLite", icon: SiSqlite, iconColor: "#8ec9ff" },
    ],
  },
  {
    name: "DevOps / Tools",
    color: "#ff1e6e",
    skills: [
      { label: "GitHub Actions", icon: SiGithubactions, iconColor: "#8ec9ff" },
      { label: "Docker", icon: SiDocker, iconColor: "#00dcff" },
      { label: "Linux/Unix", icon: SiLinux, iconColor: "#FCC624" },
      { label: "Arduino", icon: SiArduino, iconColor: "#00979D" },
      { label: "FPGA Synthesis", icon: FaMicrochip, iconColor: NEUTRAL },
    ],
  },
  {
    name: "EDA / IC Design",
    color: "#00dcff",
    skills: [
      { label: "Cadence Virtuoso", image: cadenceLogo },
      {
        label: "Synopsys Design Compiler",
        icon: FaMicrochip,
        iconColor: NEUTRAL,
      },
    ],
  },
];

function SkillsJdm() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Skills</span>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
        </div>

        <div className={styles.legend}>
          <span className={styles.legendItem}>
            <span className={styles.legendMark}>{PRIMARY_MARK}</span> Primary
          </span>
          <span className={styles.legendItem}>
            <span className={styles.legendMark}>{SECONDARY_MARK}</span>{" "}
            Working Knowledge
          </span>
        </div>

        <div className={styles.groupGrid}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.name} className={styles.groupCard}>
              <div className={styles.decalWrap}>
                <h3
                  className={styles.decalHeader}
                  style={{ background: group.color }}
                >
                  {group.name}
                </h3>
              </div>
              <div className={styles.specTable}>
                {group.skills.map(
                  ({ label, icon: Icon, image, iconColor, primary }, idx) => (
                    <div
                      key={label}
                      className={`${styles.specRow} ${
                        idx % 2 === 1 ? styles.specRowAlt : ""
                      }`}
                    >
                      <span
                        className={styles.evalMark}
                        style={{ color: primary ? group.color : undefined }}
                      >
                        {primary ? PRIMARY_MARK : SECONDARY_MARK}
                      </span>
                      {image ? (
                        <img
                          src={image}
                          alt={label}
                          className={styles.skillImage}
                        />
                      ) : (
                        <Icon
                          className={styles.skillIcon}
                          style={{ color: iconColor }}
                        />
                      )}
                      <span className={styles.skillLabel}>{label}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsJdm;
