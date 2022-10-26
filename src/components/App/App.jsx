import React from "react";
import CurrencyExchanger from "../CurrencyExchanger/CurrencyExchanger";
import styles from "./App.module.scss";

const App = () => {
  return (
    <section className={styles.app__section}>
      <CurrencyExchanger />
    </section>
  );
};

export default App;
