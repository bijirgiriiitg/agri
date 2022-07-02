import React from "react";
import Navbar from "../RecordPRD7/Navbar";
import Lectures from "./Lectures";
import Search from "./Search";
import styles from "./notes.module.css";
function NotesPRD7() {
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

export default NotesPRD7;
