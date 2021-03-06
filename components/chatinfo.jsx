import { AiOutlineFilter, AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import styles from "../styles/Chatinfo.module.css";
import Message from "./message";

function Chatinfo({ images: { data } }) {
  const [messages, setMessages] = useState([
    {
      text: "Hello",
      sender: "emanuel",
      time: "12:00",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
  ]);
  const handleClick = (e) => {
    if (message === "") return;
    e.preventDefault();
    setMessages([
      ...messages,
      {
        text: message,
        sender: "emanuel",
        time: "12:00",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
      },
    ]);
    setMessage("");
  };
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

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
        <div className={styles.chatBox}>
          {messages.map((item, index) => (
            <Message
              key={index}
              text={item.text}
              sender={item.sender}
              time={item.time}
              avatar={item.avatar}
            />
          ))}
        </div>
        <div className={styles.chatBoxInputContainer}>
          <textarea
            className={styles.chatBoxInput}
            value={message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className={styles.chatBoxButton}
            onClick={handleClick}
          >
            <AiOutlineSend className={styles.chatBoxIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatinfo;
