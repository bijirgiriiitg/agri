import React from "react";
import styles from "./process.module.css";
function Process() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.upper}>
          <p className={styles.title}>Registration Process</p>
          <button className={styles.button}>Register Now!</button>
        </div>
        <div className={styles.lower}>
          <div className={styles.main}>
            <span className={styles.number}>
              <p className={styles.num}>1</p>
            </span>
            <span className={styles.text}>Log on to www.agrivision4u.com</span>
          </div>

          <div className={styles.main}>
            <span className={styles.number}>
              <p className={styles.num}>2</p>
            </span>
            <span className={styles.text}>
              Create an account and login to the site.
            </span>
          </div>

          <div className={styles.main}>
            <span className={styles.number}>
              <p className={styles.num}>3</p>
            </span>
            <span className={styles.text}>
              Fill Talent Hunt online registration form.
            </span>
          </div>
        </div>
        <div className={styles.lower}>
          <div className={styles.main}>
            <span className={styles.number}>
              <p className={styles.num}>4</p>
            </span>
            <span className={styles.text}>You will be registered</span>
          </div>
          <div className={styles.main}>
            <span className={styles.number}>
              <p className={styles.num}>5</p>
            </span>
            <span className={styles.text}>
              The exam portal will open on the scheduled date & time.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process;
