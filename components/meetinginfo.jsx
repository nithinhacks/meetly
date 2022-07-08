import styles from "../styles/Meetinginfo.module.css";

function Meetinginfo() {
  return (
    <div className={styles.container}>
      <div className={styles.meetingInfo}>
        <p className={styles.meetingData}>Monday</p>
        <p className={styles.meetingData}>March 28</p>
        <p className={styles.meetingData}>4pm-6pm</p>
      </div>
      <div className={styles.progressbar}>
        <div className={styles.progressbarContainer}>
          <span className={styles.innerProgressbar}></span>
        </div>
      </div>
      <p className={styles.timeleft}>00:44 mins left</p>
    </div>
  );
}

export default Meetinginfo;
