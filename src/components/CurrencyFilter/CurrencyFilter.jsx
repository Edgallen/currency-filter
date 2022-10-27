import React from "react";
import styles from "./CurrencyFilter.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  setFromFilter,
  setToFilter,
} from "../../service/actions/exchangerActions";
import TabButton from "../UI/tabButton/tabButton";

const CurrencyFilter = ({ activeFilter, direction }) => {
  const dispatch = useDispatch();
  const filters = useSelector((store) => store.exchanger.tabFilters);

  const handleFilterChange = (newFilter) => {
    if (direction === "from") {
      dispatch(setFromFilter(newFilter));
      dispatch(setToFilter("Все"));
      return;
    }
    if (direction === "to") {
      dispatch(setToFilter(newFilter));
      return;
    }
  };

  return (
    <div className={styles.currenctyFilter__wrapper}>
      {filters.map((filter) => (
        <TabButton
          value={filter}
          active={filter === activeFilter}
          onClickCallback={handleFilterChange}
          key={filter + direction}
        />
      ))}
    </div>
  );
};

CurrencyFilter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["to", "from"]),
};

export default CurrencyFilter;
