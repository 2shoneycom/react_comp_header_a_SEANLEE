import Header from "./Header_typeA";
import styles from "./css/home.module.css";

function Home() {
  return (
    <div className={styles.top_container}>
      <Header />
      <div className={styles.hero_area}></div>
      <div className={styles.section1_area}></div>
      <div className={styles.section2_area}></div>
      <div className={styles.section1_area}></div>
      <div className={styles.section2_area}></div>
      <div className={styles.footer_area}></div>
    </div>
  );
}

export default Home;