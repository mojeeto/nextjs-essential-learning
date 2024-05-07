import Link from "next/link";
import Logo from "./logo";

const MainHeader: React.FC = () => {
  return (
    <header>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
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
