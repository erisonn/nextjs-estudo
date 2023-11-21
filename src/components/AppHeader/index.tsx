import Link from "next/link";
import styles from "./index.module.scss";

const AppHeader = () => {
  return (
    <div className={styles.appHeader}>
      <Link href="/">Home</Link>
      <Link href="/monsters">Monsters</Link>
      <Link href="/weapons">Weapons</Link>
      <Link href="/armor-sets">Armor Sets</Link>
      <Link href="/skills">Skills</Link>
    </div>
  );
};

export default AppHeader;
