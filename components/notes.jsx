import styles from "../styles/Notes.module.css";
import { ImStack } from "react-icons/im";
import { AiOutlineEdit, AiOutlineSend } from "react-icons/ai";
import Lexicaleditor from "../editor/LexicalEditor";

function Notes({ images: { data } }) {
  return (
    <div className={styles.notesContainer}>
      <div className={styles.notes}>
        <ImStack className={styles.stackIcon} />
        <a href="">
          <p className={styles.notesPara}>
            <AiOutlineEdit className={styles.editLogo} /> Today's notes
          </p>
        </a>
        <p className={styles.notesPara}>Yesterday's notes</p>
      </div>
      <Lexicaleditor />
      <div className={styles.footer}>
        <p className={styles.footerPara}>shared with</p>
        <div className={styles.footerImages}>
          {data.map(
            (item, index) =>
              index < 2 && (
                <img className={styles.image} src={item.avatar} alt="avatar" />
              )
          )}
        </div>
        <button className={styles.footerButton}>
          <AiOutlineSend className={styles.sendIcon} />
        </button>
      </div>
    </div>
  );
}

export default Notes;
