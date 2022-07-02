import styles from "./terms.module.css";
function Terms() {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <p className={styles.heading}>Terms and Conditions</p>
        <ul className={styles.points}>
          <li>
            If you are an existing student of AgriVision4U and enrolled before
            5th March 2022, you will not be eligible for the scholarship. It's
            mandatory to take admission within 2 weeks of declaration of result
            to avail the scholarship.
          </li>
          <li>
            Scholarship will not be applicable on those batches which are
            commencing before the test date.
          </li>
          <li>
            The total number of scholars is subject to the total registration
            and other parameters.
          </li>
          <li>
            The Talent Hunt may be postponed or conducted, in case the
            conditions are not favorable.
          </li>
          <li>
            AgriVision4U reserves all rights to make any alterations as per the
            situation. The decision taken by the management will remain final
            and abiding by all.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Terms;
