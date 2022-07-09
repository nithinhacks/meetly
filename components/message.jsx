import styles from "../styles/Message.module.css";

function Message({ sender, time, text, avatar }) {
  return (
    <div className={styles.chatBoxNotifications}>
      <div className={styles.innerContainer}>
        <img className={styles.image} src={avatar} alt="avatar" />
        <p className={styles.chatDetailsMsg}>
          <span style={{ fontWeight: 600 }}>{sender} : </span>
          {text}
        </p>
        <p className={styles.chatBoxTime}>{time}</p>
      </div>
    </div>
  );
}

export default Message;
