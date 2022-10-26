import React from "react";
import styles from "./CurrencyFilter.module.scss";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

const CurrencyFilter = ({ activeFilter, filters, filterChangeCallback }) => {
  return (
    <div className={styles.currenctyFilter__wrapper}>
      {filters.map((filter) => (
        <div
          className={`${styles.currencyFilter__button}${
            activeFilter === filter
              ? " " + styles.currencyFilter__button__active
              : ""
          }`}
          onClick={() => filterChangeCallback(filter)}
          key={uuid()}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

CurrencyFilter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterChangeCallback: PropTypes.func.isRequired,
};

export default CurrencyFilter;
