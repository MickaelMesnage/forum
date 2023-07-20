import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <button>Accueil</button>
      </Link>
      <Link href="/message/list" passHref>
        <button>Messages</button>
      </Link>
      <Link href="/message/create" passHref>
        <button>Créer un message</button>
      </Link>
    </header>
  );
};

export default Header;
