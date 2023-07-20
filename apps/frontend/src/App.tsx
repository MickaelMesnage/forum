import styles from "./App.module.css";
import { Header } from "./components/organisms/Header/Header";
import { Router } from "./pages/Router";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <Router />
      </div>
    </div>
  );
}

export default App;
