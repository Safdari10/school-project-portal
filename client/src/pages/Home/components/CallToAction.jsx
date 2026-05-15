import styles from "./CallToAction.module.css";

function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>What are you waiting for?</h2>
        <p className={styles.ctaDescription}>
          Start teaching Digital Technologies today.
          <br />
          If you need more information, we are happy to answer any questions you
          may have.
        </p>
        <div className={styles.ctaButtons}>
          <button className={`${styles.ctaBtn} ${styles.ctaEnquireBtn}`}>
            Enquire Now
          </button>
          <button className={`${styles.ctaBtn} ${styles.ctaSignupBtn}`}>
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
