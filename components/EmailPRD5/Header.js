import React from "react";
import logo from "./logo.jpg";
import styles from "./header.module.css";
function Header() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <img src={logo} alt="logo" className={styles.img} />
        </div>

        <div className={styles.container}>
          <p className={styles.organization}>Agrivision4U</p>
          <p className={styles.talent}>Talent Hunt</p>
        </div>
      </div>
    </>
  );
}

export default Header;
