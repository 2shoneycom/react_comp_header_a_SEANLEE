import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/hamburger.module.css";

function Hamburger({ navData }) {
  const [navItemList, setNavItemList] = useState(navData.itemList);

  return (
    <div className={styles.hamburger_outer_box}>
      <div className={styles.hamburger_navigatior}>
        {navItemList.map((navItem, index) =>
          <Link
            className={styles.hamburger_navigatior_item}
            to={`/${navData.linkList[navItem]}`}
            key={index}
          >
            <div className={styles.hamburger_navigator_text}>{navItem}</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Hamburger;