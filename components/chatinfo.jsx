import { AiOutlineFilter } from "react-icons/ai";
import styles from "../styles/Chatinfo.module.css";

function Chatinfo({ images: { data } }) {
  return (
    <div className={styles.chatInfoContainer}>
      <div className={styles.chatHeadersContainer}>
        <p className={styles.mainHeader}>Meeting Stream</p>
        <p className={styles.secondaryHeader}>Action Items</p>
        <AiOutlineFilter className={styles.filterIcon} />
      </div>
      <div className={styles.chatDetailsContainer}>
        <div className={styles.chatDetails}>
          <div className={styles.innerContainer}>
            {data.map(
              (item, index) =>
                index < 3 && (
                  <img
                    className={styles.image}
                    src={item.avatar}
                    alt="avatar"
                  />
                )
            )}
            <p className={styles.chatDetailsMsg}>
              Emmanuel, Isha, Shashank and 4 others have access to this.
            </p>
          </div>
          <div className={styles.innerContainer}>
            {data.map(
              (item, index) =>
                index < 3 && (
                  <img
                    className={styles.image}
                    src={item.avatar}
                    alt="avatar"
                  />
                )
            )}
            <p className={styles.chatDetailsMsg}>
              Sudhanshu and 8 others are not on Meetly and cannot access this.
              <span className={styles.chatLink}>
                Invite them to collaborate
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.chatBoxContainer}>
        <div className={styles.chatBoxDateContainer}>
          <hr className={styles.hr} />
          <p className={styles.chatBoxDate}>Mon, Jun 12 2022</p>
          <hr className={styles.hr} />
        </div>
        <div className={styles.chatBoxNotifications}>
          <div className={styles.innerContainer}>
            {data.map(
              (item, index) =>
                index < 1 && (
                  <img
                    className={styles.image}
                    src={item.avatar}
                    alt="avatar"
                  />
                )
            )}
            <p className={styles.chatDetailsMsg}>Emmanuel created this event</p>
            <p className={styles.chatBoxTime}>13:54</p>
          </div>
        </div>
        <div className={styles.chatBoxNotifications}>
          <div className={styles.innerContainer}>
            {data.map(
              (item, index) =>
                index < 1 && (
                  <img
                    className={styles.image}
                    src={item.avatar}
                    alt="avatar"
                  />
                )
            )}
            <p className={styles.chatDetailsMsg}>
              Emmanuel invited Shashank, Isha and 4 others to this event
            </p>
            <p className={styles.chatBoxTime}>13:54</p>
          </div>
        </div>
        <div className={styles.chatBox}></div>
      </div>
    </div>
  );
}

export default Chatinfo;
