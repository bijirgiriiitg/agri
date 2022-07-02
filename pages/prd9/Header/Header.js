import React from "react";
import styles from "./header.module.css";
function Header() {
  return (
    
      <div className={styles.container}>
        <p className={styles.heading}>Food Technology</p>
        <input
          type="text"
          className={styles.text}
          placeholder="What do you want to ask or share ?"
        />
        <button className={styles.button1}>Ask a question</button>
      </div>
    
  );
}

export default Header;
