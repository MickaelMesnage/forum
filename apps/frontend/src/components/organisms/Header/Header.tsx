import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <nav className={styles.container}>
        <a href={"/"}>Accueil</a>
        <a href={"/message/list"}>Liste des messages</a>
        <a href={"/message/create"}>Créer un message</a>
      </nav>
    </header>
  );
};
