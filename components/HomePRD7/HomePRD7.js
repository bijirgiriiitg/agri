import React from "react";
import styles from "./home.module.css";
import { useState } from "react";
import image1 from "./image 111.jpg";
import Navbar from "../RecordPRD7/Navbar";
import axios from "axios";

function HomePRD7() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <Navbar></Navbar>
        </div>
        <div className={styles.right}>
          <div className={styles.first}>
            <div className={styles.firstHeader}>
              <p className={styles.firstHeading}>Engineering Mathematics</p>
              <div className={styles.firstCourse}>
                <p className={styles.course}>Course : 001</p>
                <p className={styles.batch}>Batch : Achiever</p>
              </div>
            </div>
            <p className={styles.exam}>Exam Target : GATE</p>
            <p className={styles.instructor}>
              Instructor : Shubrodip Chatterjee
            </p>
            <p className={styles.syllabus}>
              Syllabus : Sic de isto et tutius perducit ad actum ipsum, ut si
              dico “Ego autem vadam lavari, ut mens mea in statu naturae
              conformior.” Et similiter circa alias res. Et sic, si contingit ex
              per se lavantem,{" "}
            </p>
          </div>
          <p className={styles.second}>Today’s Topic : Lorem Ipsum</p>
          <img src={image1} alt="Science" className={styles.third} />
          <div className={styles.fourth}>
            <p className={styles.fourthHeading}>Meeting Details :</p>
            <p className={styles.fourthDate}>Date : 13th March, 2022 </p>
            <p className={styles.fourthTime}> Time : 5pm to 6pm </p>
            <p className={styles.fourthPlatform}>
              Platform: <a href="">Joining link: https://meet.google.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePRD7;
