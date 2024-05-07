import Link from "next/link";
import Logo from "./logo";
import styles from "./main-header.module.css";

const MainHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Commmunity</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
