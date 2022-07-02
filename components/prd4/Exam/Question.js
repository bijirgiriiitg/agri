import React from "react";
import styles from "./question.module.css";
function Question() {
  return (
    <div className={styles.container}>
      <div className={styles.qsnumber}>
        <h1 className={styles.num}>1.</h1>
        <h3 className={styles.text}>
          Courses Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </h3>
      </div>
      <div className={styles.options}>
        <p className={styles.option}>
          <input type="radio" name="question1" value="OptionA" />
          OptionA
        </p>
        <p className={styles.option}>
          <input type="radio" name="question1" value="OptionB" />
          OptionB
        </p>
        <p className={styles.option}>
          <input type="radio" name="question1" value="OptionC" />
          OptionC
        </p>
        <p className={styles.option}>
          <input type="radio" name="question1" value="OptionD" />
          OptionD
        </p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.answer}>
          Answer <span>&#38;</span> solution
        </button>
        <button className={styles.discussion}>Join the discussion</button>
        <button className={styles.save}>Save for later</button>
      </div>
    </div>
  );
}

export default Question;
