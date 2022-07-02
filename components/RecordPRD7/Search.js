import React from "react";

// import Bookmark from "@material-ui/icons";
import subject from "./subject.jpg";
import styles from "./search.module.css";
function Search() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.first}>
          <p className={styles.firstHeading}>Recorded Lectures</p>
          <div className={styles.box}>
            <input
              type="text"
              className={styles.input}
              placeholder="Search for lecture by name"
            />
            <button className={styles.search}>Search</button>
          </div>
        </div>
        <div className={styles.second}>
          <p className={styles.secondHeading}>Recent Lectures</p>
          <p className={styles.load}>view more </p>
        </div>
        <div className={styles.third}>
          <div className={styles.cards}>
            <img src={subject} alt="topic" className={styles.img} />
            <div className={styles.lower}>
              <div className={styles.about}>
                <p className={styles.number}>1.</p>
                <p className={styles.text}>Calculus</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-bookmark"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <p className={styles.time}>30mintutes</p>
          </div>
          <div className={styles.cards}>
            <img src={subject} alt="topic" className={styles.img} />
            <div className={styles.lower}>
              <div className={styles.about}>
                <p className={styles.number}>2.</p>
                <p className={styles.text}>Thermodynamics</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-bookmark"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <p className={styles.time}>30mintutes</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
