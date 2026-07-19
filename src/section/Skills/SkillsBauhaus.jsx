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
import styles from "./SkillsBauhaus.module.css";
import javaLogo from "../../assets/java_logo.png";
import chromadbLogo from "../../assets/chromadb.png";
import cadenceLogo from "../../assets/cadence.png";

const NEUTRAL = "#333333";

const SKILL_GROUPS = [
  {
    name: "Languages",
    color: "#1d3557",
    skills: [
      { label: "C++", icon: SiCplusplus, iconColor: "#00599C" },
      { label: "Python", icon: SiPython, iconColor: "#3776AB" },
      { label: "C", icon: SiC, iconColor: "#A8B9CC" },
      { label: "Verilog", icon: FaMicrochip, iconColor: NEUTRAL },
      { label: "Java", image: javaLogo },
      { label: "TypeScript", icon: SiTypescript, iconColor: "#3178C6" },
      { label: "SQL", icon: FaMicrochip, iconColor: NEUTRAL },
    ],
  },
  {
    name: "Frameworks",
    color: "#e63946",
    skills: [
      { label: "PyTorch", icon: SiPytorch, iconColor: "#EE4C2C" },
      { label: "Scikit-learn", icon: SiScikitlearn, iconColor: "#F7931E" },
      { label: "Pandas", icon: SiPandas, iconColor: "#150458" },
      { label: "NumPy", icon: SiNumpy, iconColor: "#4D77CF" },
      { label: "LangChain", icon: SiLangchain, iconColor: "#1C3C3C" },
      { label: "LangGraph", icon: SiLangchain, iconColor: "#1C3C3C" },
      { label: "React", icon: SiReact, iconColor: "#61DAFB" },
    ],
  },
  {
    name: "Databases",
    color: "#f4a400",
    skills: [
      { label: "PostgreSQL", icon: SiPostgresql, iconColor: "#4169E1" },
      { label: "Supabase", icon: SiSupabase, iconColor: "#3ECF8E" },
      { label: "ChromaDB", image: chromadbLogo },
      { label: "SQLite", icon: SiSqlite, iconColor: "#003B57" },
    ],
  },
  {
    name: "DevOps / Tools",
    color: "#1d3557",
    skills: [
      { label: "GitHub Actions", icon: SiGithubactions, iconColor: "#2088FF" },
      { label: "Docker", icon: SiDocker, iconColor: "#2496ED" },
      { label: "Linux/Unix", icon: SiLinux, iconColor: "#FCC624" },
      { label: "Arduino", icon: SiArduino, iconColor: "#00979D" },
      { label: "FPGA Synthesis", icon: FaMicrochip, iconColor: NEUTRAL },
    ],
  },
  {
    name: "EDA / IC Design",
    color: "#e63946",
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

function SkillsBauhaus() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.secBacking} />
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Skills</span>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
        </div>

        <div className={styles.groupGrid}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.name} className={styles.groupCard}>
              <h3
                className={styles.groupName}
                style={{ background: group.color }}
              >
                {group.name}
              </h3>
              <div className={styles.iconGrid}>
                {group.skills.map(({ label, icon: Icon, image, iconColor }) => (
                  <div key={label} className={styles.skillItem}>
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
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsBauhaus;
