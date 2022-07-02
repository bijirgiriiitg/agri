import styles from "./header.module.css";
import image1 from "./Header.jpg";
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.heading}>Welcome to AgriAbhyaas</h2>
        <div className={styles.content}>
          <h5 className={styles.description}>
            As they say, practice makes you perfect. AgriAbhyaas is your one
            stop platform to practice and excel in challenging subjects.
          </h5>
          <h3 className={styles.moto}>KNOW YOUR SELF TESTS</h3>
        </div>
      </div>
      <div className={styles.right}>
        <img src={image1} alt="Header" className={styles.img} />
      </div>
    </div>
  );
}

export default Header;
