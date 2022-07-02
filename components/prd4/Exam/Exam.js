import React from "react";
import styles from "./exam.module.css";
import Question from "./Question";
function Exam() {
  return (
    <>
      <div className={styles.container}>
        <Question></Question>
        <Question></Question>
        <Question></Question>
        <Question></Question>
      </div>
      
    </>
  );
}

export default Exam;
