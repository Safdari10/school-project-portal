import styles from "./YoungMinds.module.css";

function YoungMinds() {
  return (
    <section className={styles.yms}>
      <div className={styles.content}>
        <h1>
          Prepare young minds for a better{" "}
          <span className={styles.highlight}>future</span>.
        </h1>
        <h4>
          Let us help you advance students in Digital Technologies and other
          learning areas with our project-based learning programme.
        </h4>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Learn More</button>
          <button className={styles.secondaryBtn}>Sign Up</button>
        </div>
        <p className={styles.subscriptionText}>
          *Basic subscription includes the first 15 projects free of charge.
        </p>
      </div>
    </section>
  );
}

export default YoungMinds;
