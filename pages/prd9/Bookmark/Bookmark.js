import React from "react";
import styles from "./bookmark.module.css";
import Button2 from "../Buttons/Button2";
import card from "./image1.jpg";
// import { useState } from "react";
function Bookmark() {
  let cards = [
    {
      text1: "In Your Backyard",
    },
    {
      text1: "In Your Backyard",
    },
    {
      text1: "In Your Backyard",
    },
    {
      text1: "In Your Backyard",
    },
  ];
  // const [hover, sethover] = useState(false);
  return (
      <div className={styles.container}>
        <p className={styles.heading}>Bookmarks</p>
        <div className={styles.first}>
          <div className={styles.firstTop}>
            <p className={styles.subHeading}>Recently Bookmarked</p>
            <div className={styles.button}>
              <Button2 className={styles.buttons}></Button2>
            </div>
          </div>
          <div className={styles.cardsShow}>
            {cards.map((Obj, i) => (
              <div className={styles.cards}>
                <div className={styles.cardsInside}>
                  <img src={card} alt="card" className={styles.img} />
                  <p className={styles.text}>{Obj.text1}</p>
                  <p className={styles.number}>{i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.second}>
          <p className={styles.subHeading}>Category wise</p>
          <div className={styles.cardsShow}>
            {cards.map((Obj, i) => (
              <div className={styles.cards}>
                <div className={styles.cardsInside}>
                  <img src={card} alt="card" className={styles.img} />
                  <p className={styles.text}>{Obj.text1}</p>
                  <p className={styles.number}>{i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.third}>
          <p className={styles.subHeading}>All Bookmarks</p>
          <div className={styles.cardsShow}>
            {cards.map((Obj, i) => (
              <div className={styles.cards}>
                <div className={styles.cardsInside}>
                  <img src={card} alt="card" className={styles.img} />
                  <p className={styles.text}>{Obj.text1}</p>
                  <p className={styles.number}>{i + 1}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cardsShow}>
            {cards.map((Obj, i) => (
              <div className={styles.cards}>
                <div className={styles.cardsInside}>
                  <img src={card} alt="card" className={styles.img} />
                  <p className={styles.text}>{Obj.text1}</p>
                  <p className={styles.number}>{i + 5}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Bookmark;
