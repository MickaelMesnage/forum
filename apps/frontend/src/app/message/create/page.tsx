import styles from "./page.module.css";

const MessageCreatePage = () => {
  return (
    <section className={styles.section}>
      <div>Créer un message</div>
      <button type="button">Créer</button>
    </section>
  );
};

export default MessageCreatePage;
