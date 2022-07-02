import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import styles from "./feature.module.css";
import books from "./Books.jpg";
import Rating from "./Rating";
function Feature() {
  return (
    <div className={styles.main}>
      <p className={styles.heading}>Checkout other packages</p>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={books} alt="books" className={styles.img} />
          <p className={styles.count}>1.2k enrolled</p>
          <div className={styles.rating}>
            <h4 className={styles.ratingCount}>4.7</h4>
            <Rating value="4" color="#E59819" />
            <h4
              style={{
                fontSize: "12px",
                margin: "auto",
                padding: "5px",
                color: "#5F5F5F",
              }}
            >
              ( 12340 )
            </h4>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.text}>Gate XE Thermodynamics</p>
          <div className={styles.list}>
            <div className={styles.point}>
              <CheckCircleOutlineOutlinedIcon
                className={styles.icon}
              ></CheckCircleOutlineOutlinedIcon>
              <p className={styles.topic}>General Amplitude</p>
            </div>
            <div className={styles.point}>
              <CheckCircleOutlineOutlinedIcon
                className={styles.icon}
              ></CheckCircleOutlineOutlinedIcon>
              <p className={styles.topic}>Fluid Mechanics</p>
            </div>
            <div className={styles.point}>
              <CheckCircleOutlineOutlinedIcon
                className={styles.icon}
              ></CheckCircleOutlineOutlinedIcon>
              <p className={styles.topic}>Food Technology</p>
            </div>
            <div className={styles.point}>
              <CheckCircleOutlineOutlinedIcon
                className={styles.icon}
              ></CheckCircleOutlineOutlinedIcon>
              <p className={styles.topic}>Engineering Mathematics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
