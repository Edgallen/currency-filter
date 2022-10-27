import React, { useState, useMemo } from "react";
import styles from "./CurrencyInput.module.scss";
import PropTypes from "prop-types";
import ArrowSvg from "../../images/arrow-s.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setFromCurrency,
  setToCurrency,
} from "../../service/actions/exchangerActions";

const filterBySelectedTab = (store, directionToTrack) => {
  const filterArr = store.directions.data;
  const activeFilter = store.activeFilters[directionToTrack];
  const selectedCode = store.filterCodes[activeFilter];
  const filteredArr = filterArr.filter((element) =>
    selectedCode.includes(element.code)
  );

  return filteredArr;
};

const CurrencyInput = ({ directionToTrack }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const exchangerStore = useSelector((store) => store.exchanger);

  const filteredCurrencies = useMemo(() => {
    if (exchangerStore.activeFilters[directionToTrack] === "Все") {
      return exchangerStore.directions.data;
    }

    return filterBySelectedTab(exchangerStore, directionToTrack);
  }, [exchangerStore.activeFilters[directionToTrack]]);

  // TODO: Переделать
  const filteredToCurrenies = useMemo(() => {
    if (directionToTrack === "to") {
      if (exchangerStore.selectedCurrencies.from !== "-") {
        console.log("hello");
      }
      return [];
    }
    return filteredCurrencies;
  }, [exchangerStore.selectedCurrencies.from]);

  const handleInputChange = (newValue) => {
    setInput(newValue);
  };

  const handleSelectChange = (newCurrencie) => {
    if (directionToTrack === "from") {
      dispatch(setFromCurrency(newCurrencie));
      return;
    }
    dispatch(setToCurrency(newCurrencie));
  };

  return (
    <div className={styles.input__wrapper}>
      <input
        type="text"
        className={styles.input}
        value={input}
        onChange={(event) => handleInputChange(event.target.value)}
      />
      <div className={styles.input__wrapper}>
        <select
          className={styles.input__select}
          name="currency"
          id="currency-select"
          onChange={(event) => handleSelectChange(event.target.value)}
        >
          <option value="-">-</option>
          {filteredToCurrenies.map((currency) => (
            <option value={currency.code} key={currency.code}>
              {currency.code}
            </option>
          ))}
        </select>
        <ArrowSvg className={styles.input__icon} />
      </div>
    </div>
  );
};

CurrencyInput.propTypes = {
  directionToTrack: PropTypes.oneOf(["to", "from"]).isRequired,
};

export default CurrencyInput;
