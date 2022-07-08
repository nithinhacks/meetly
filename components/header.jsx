import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <a href="">
          <p className={styles.logo}>Meetly</p>
        </a>
      </div>
      <div className={styles.headingContainer}>
        <p className={styles.heading}>Kickstart work on Meetly</p>
      </div>
    </header>
  );
}

export default Header;
