import React from "react";

// import Bookmark from "@material-ui/icons";
import subject from "./subject.jpg";
import { useEffect, useState } from "react";
import styles from "./lectures.module.css";
import { useLocation, Link } from "react-router-dom";

function Lectures() {
  let subjects = [
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Thermodynamics",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
    {
      subject: "Calculus",
    },
  ];
  const [State, setState] = useState([]);
  const location = useLocation();
  const high = Math.ceil(subjects.length / 9);
  // console.log(subjects.length);
  console.log(high);
  console.log("location ", location.pathname.split("/")[2]);
  const pagenumber = Number(location.pathname.split("/")[2]);
  useEffect(() => {
    setState(subjects.slice((pagenumber - 1) * 9, (pagenumber - 1) * 9 + 9));
  }, [pagenumber]);

  return (
    <>
      <div className={styles.container}>
        <p className={styles.heading}>All Recorded Lectures</p>
        <div className={styles.cardsShow}>
          {State.map((Obj, i) => (
            <div className={styles.cards}>
              <img src={subject} alt="topic" className={styles.img} />
              <div className={styles.lower}>
                <div className={styles.about}>
                  <p className={styles.number}>
                    {i + 1 + (pagenumber - 1) * 9}.
                  </p>
                  <p className={styles.text}>{Obj.subject}</p>
                </div>
                <svg
                  className={styles.icon}
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
          ))}
        </div>
        <div className={styles.pagination}>
          {/* {console.log(pathname)} */}
          {pagenumber && pagenumber > 1 && (
            <Link to={`/record/${pagenumber - 1}`} className={styles.pageItem}>
              Previous
            </Link>
          )}
          <>
            {[3, 2, 1].map((Obj, i) => (
              <>
                {pagenumber - Obj >= 1 && (
                  <Link
                    to={`/record/${pagenumber - Obj}`}
                    className={styles.pageItem}
                  >
                    {pagenumber - Obj}
                  </Link>
                )}
              </>
            ))}
          </>

          {pagenumber && pagenumber < high && (
            <Link to={`/record/${pagenumber + 1}`} className={styles.pageItem}>
              Next
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Lectures;
