import Logo from "../logo";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader: React.FC = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Logo className={styles.logo} />
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Commmunity</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
