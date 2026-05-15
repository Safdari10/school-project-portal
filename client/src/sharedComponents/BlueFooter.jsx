import styles from "./BlueFooter.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerList}>
        <p>COMPANY</p>
        <ul>
          <li>About us</li>
          <br />
          <li>Careers</li>
          <br />
          <li>Partners</li>
        </ul>
      </div>
      <div className={styles.footerList}>
        <p>COURSES</p>
        <ul>
          <li>Register</li>
          <br />
          <li>Login</li>
          <br />
          <li>Projects</li>
          <br />
          <li>Teachers</li>
          <br />
          <li>Parents</li>
          <br />
          <li>Resources</li>
        </ul>
      </div>
      <div className={styles.footerList}>
        <p>SUPPORT</p>
        <ul>
          <li>FAQ&apos;s</li>
          <br />
          <li>Helpdesk</li>
          <br />
          <li>Contact Us</li>
        </ul>
      </div>
      <div className={styles.footerList}>
        <p>LEGAL</p>
        <ul>
          <li>Terms & Conditions</li>
          <br />
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className={styles.levelUp}>
        <p>LevelUp Works</p>
        <br />
        <p>
          LevelUp Works is an Auckland-based enterprise dedicated to developing
          game-based learning software to help teachers in response to the New
          Zealand Digital Technologies and Hangarau Matihiko.
          alan@levelupworks.com (021) 668 185
        </p>
      </div>
    </footer>
  );
}
