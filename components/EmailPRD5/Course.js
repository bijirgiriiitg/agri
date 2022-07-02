import React from "react";
import styles from "./course.module.css";
import people from "./people.jpg";
function Course() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <p Online Course className={styles.title}>
            Live Online Course
          </p>
          <p className={styles.year}>For GATE 2023 (XL/XE)</p>
          <div className={styles.form}>
            <div className={styles.input1}>
              <p className={styles.head}>Test Date</p>
              <p className={styles.sym}>:</p>
              <p className={styles.content}>6th March 2022</p>
            </div>
            <div className={styles.input2}>
              <p className={styles.head}>Timings</p>
              <p className={styles.sym}>:</p>
              <p className={styles.content}>9am - 9pm</p>
            </div>
            <div className={styles.input1}>
              <p className={styles.head}>Mode</p>
              <p className={styles.sym}>:</p>
              <p className={styles.content}>Online</p>
            </div>
            <div className={styles.input2}>
              <p className={styles.head}>Exam Duration</p>
              <p className={styles.sym}>:</p>
              <p className={styles.content}>60 minutes</p>
            </div>
            <div className={styles.input1}>
              <p className={styles.head}>No. of Questions</p>
              <p className={styles.sym}>:</p>
              <p className={styles.content}>10</p>
            </div>
            <div className={styles.input2}>
              <p className={styles.head}>Negative Mark</p>
              <p className={styles.sym}>:</p>
              <p className={styles.content}>5</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src={people} alt="people" className={styles.img} />
        </div>
      </div>
    </>
  );
}

export default Course;
