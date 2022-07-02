import React from "react";
import styles from "./scholarship.module.css";
function Scholarship() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.heading}>Scholarship</p>
        <div className={styles.title}>
          <p className={styles.marks}>Marks Distribution</p>
          <p className={styles.fee}>Fee Wavier (%)</p>
        </div>
        <div className={styles.row1}>
          <div className={styles.category}>
            <p className={styles.text}>Category A </p>
            <p className={styles.student}>(Top 3 students)</p>
          </div>
          <p className={styles.amount}>75%</p>
        </div>
        <div className={styles.row2}>
          <div className={styles.category}>
            <p className={styles.text}>Category B </p>
            <p className={styles.student}>(Next 10 students)</p>
          </div>
          <p className={styles.amount}>50%</p>
        </div>
        <div className={styles.row1}>
          <div className={styles.category}>
            <p className={styles.text}>Category A </p>
            <p className={styles.student}>(Next 20 students)</p>
          </div>
          <p className={styles.amount}>25%</p>
        </div>
      </div>
    </>
  );
}

export default Scholarship;
