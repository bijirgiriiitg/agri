/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import styles from "./switch.module.css";
import cx from "classnames";
function Switch({ rounded = true, isToggled, onToggle }) {
  const sliderCX = cx("slider", {
    rounded: rounded,
  });
  return (
    <>
      <label className={styles.switch}>
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={sliderCX} className={styles.slider} />
      </label>
    </>
  );
}

export default Switch;
