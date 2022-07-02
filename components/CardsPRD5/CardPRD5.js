import React from "react";
import styles from "./card.module.css";
import { useEffect, useState } from "react";
function CardPRD5() {
  const cards = [
    {
      id: 1,
      user: "Shyam",
      question: "Which exam/s are you looking to conquer?",
      boxes: ["GATE", "CFTRI", "CFO/TO", "ICAR"],
      footer: "",
    },
    {
      id: 1,
      user: "Shyam",
      question: "How prepared do you feel to crack this exam/s?",
      boxes: ["Confident", "Maybe, I can crack it", "I don’t feel prepared"],
      footer:
        "Yayy! You just need some questions to practice and you will be good to go. Don’t forget to check our Test-series section!",
    },
  ];
  const [State, setState] = useState([]);
  const [Page, setPage] = useState(1);
  const high = Math.ceil(cards.length);
  useEffect(() => {
    setState(cards.slice(Page - 1, (Page - 1) * 1 + 1));
  }, [Page]);
  const handleNext = () => {
    setPage(function (prev) {
      return prev + 1;
    });
  };
  const handlePrevious = () => {
    setPage(function (prev) {
      return prev - 1;
    });
  };
  return (
    <>
      {State.map((card, index) => (
        <div className={styles.container}>
          <p className={styles.heading}>
            Hello <span className={styles.student}>{card.user}!</span>
          </p>
          <p className={styles.greeting}>help us know you better</p>

          <p className={styles.question}>{card.question}</p>
          <div className={styles.boxes}>
            {card.boxes.map((box, index) => (
              <span className={styles.box}>
                <p>{box}</p>
              </span>
            ))}
          </div>
          <p className={styles.footer}>{card.footer}</p>
          <div className={styles.pagination}>
            <button
              className={styles.previous}
              disabled={Page <= 1}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className={styles.next}
              disabled={Page >= high}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardPRD5;
