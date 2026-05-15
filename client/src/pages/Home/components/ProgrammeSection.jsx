import { useState, useEffect } from "react";
import styles from "./ProgrammeSection.module.css";

function ProgrammeSection() {
  const [selectedFeature, setSelectedFeature] = useState("");

  // conditional rendering
  const renderFeatureContent = () => {
    if (selectedFeature === "Learning Pathways") {
      return <p>Description about Learning Pathways</p>;
    } else if (selectedFeature === "Digital Technologies") {
      return <p>Description about Digital Technologies</p>;
    } else if (selectedFeature === "Key Competencies") {
      return (
        <div className="enhance-key-competencies">
          <h3>Enhance Key Competencies</h3>
          <p>
            The programme enhances capabilities of students in the 5 Key
            Competences identified in the New Zealand Curriculum:
          </p>
          <ul>
            <li>
              <strong>THINKING:</strong> In particular the programme focused on
              problem solving, design thinking and computational thinking.
            </li>
            <li>
              <strong>DISCERNING CODES:</strong> Analysing language, symbols and
              texts in order to understand and make sense of the codes in which
              knowledge is expressed.
            </li>
            <li>
              <strong>SELF MANAGEMENT :</strong> Projects and challenges are
              designed to motivate students to explore and experiment with
              self-motivation.
            </li>
            <li>
              <strong>RELATIONSHIP WITH PEERS:</strong> The programme is
              designed with unplugged sessions where students interact in a
              range of different situations, including things like being able to
              listen well, recognise different points of view and share ideas.
            </li>
            <li>
              <strong>PARTICIPATION AND COLLABORATION:</strong> The programme
              encourages students to be involved in communities such as family,
              whanau, school and contribute and make connections with other
              people.
            </li>
          </ul>
        </div>
      );
    } else if (selectedFeature === "IR4.0") {
      return <p>Description about IR4.0</p>;
    } else {
      return <p>Please select a feature to see its description.</p>;
    }
  };

  useEffect(() => {
    if (selectedFeature) {
      console.log(`${selectedFeature} feature selected.`);
    }
  }, [selectedFeature]);

  return (
    <section className={styles.programmeSection}>
      <h2>How our programme helps teachers and schools</h2>

      <div className={styles.programmeButtons}>
        <button
          className={styles.programmeButton}
          onClick={() => setSelectedFeature("Learning Pathways")}
        >
          Learning Pathways
        </button>
        <button
          className={styles.programmeButton}
          onClick={() => setSelectedFeature("Digital Technologies")}
        >
          Digital Technologies
        </button>
        <button
          className={styles.programmeButton}
          onClick={() => setSelectedFeature("Key Competencies")}
        >
          Key Competencies
        </button>
        <button
          className={styles.programmeButton}
          onClick={() => setSelectedFeature("IR4.0")}
        >
          IR4.0
        </button>
      </div>

      <div className={styles.programmeDescription}>
        {renderFeatureContent()}
      </div>
    </section>
  );
}

export default ProgrammeSection;
