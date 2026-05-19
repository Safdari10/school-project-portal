import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>404</h1>
      <h2 className={styles.subHeader}>Oops! Page Not Found</h2>
      <p className={styles.message}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className={styles.link}
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
