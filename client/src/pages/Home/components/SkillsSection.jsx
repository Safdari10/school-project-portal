import styles from "./SkillsSection.module.css";
import skill1 from "../../../assets/Home/group1.png";
import skill2 from "../../../assets/Home/group2.png";
import skill3 from "../../../assets/Home/group3.png";
import skill4 from "../../../assets/Home/group4.png";

function SkillsSection() {
  return (
    <section className={styles.skillsSection}>
      <h3>
        Teaching kids programming and digital skills is MORE than just writing
        code.
      </h3>

      <div className={styles.skillBoxes}>
        <div className={styles.skill}>
          <img
            src={skill1}
            alt="Creativity"
          />
        </div>
        <div className={styles.skill}>
          <img
            src={skill2}
            alt="Problem Solving"
          />
        </div>
        <div className={styles.skill}>
          <img
            src={skill3}
            alt="Collaboration"
          />
        </div>
        <div className={styles.skill}>
          <img
            src={skill4}
            alt="Future Focus"
          />
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
