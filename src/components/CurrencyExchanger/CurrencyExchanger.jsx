import React, { useState } from "react";
import styles from "./CurrencyExchanger.module.scss";
import CurrencyFilter from "../UI/CurrencyFilter/CurrencyFilter";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import { useSelector } from "react-redux";

const CurrencyExchanger = () => {
  const exchangerStore = useSelector((store) => store.exchanger);
  const [activeFilter, setActiveFilter] = useState("Все");

  const handleFilterChange = (newFilter) => {
    setActiveFilter(newFilter);
  };

  return (
    <div className={styles.currencyExchanger}>
      <div className={styles.currencyExchanger__wrapper}>
        <h1 className={styles.currencyExchanger__title}>Отдаёте</h1>
        <CurrencyFilter
          filters={exchangerStore.tabFilters}
          activeFilter={activeFilter}
          filterChangeCallback={handleFilterChange}
        />
        <CurrencyInput />
      </div>
      <div className={styles.currencyExchanger__wrapper}>
        <h1 className={styles.currencyExchanger__title}>Получаете</h1>
        <CurrencyFilter
          filters={exchangerStore.tabFilters}
          activeFilter={activeFilter}
          filterChangeCallback={handleFilterChange}
        />
        <CurrencyInput />
      </div>
    </div>
  );
};

export default CurrencyExchanger;
