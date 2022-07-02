import React from "react";
import Navbar from "./Navbar";
import Lectures from "./Lectures";
import Search from "./Search";
import styles from "./record.module.css";
function RecordPRD7() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <Navbar></Navbar>
          </div>
          <div className={styles.right}>
            <Search></Search>
          </div>
        </div>
        <Lectures></Lectures>
      </div>
    </>
  );
}

export default RecordPRD7;
