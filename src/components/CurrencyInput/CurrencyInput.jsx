import React, { useState } from "react";
import styles from "./CurrencyInput.module.scss";
import PropTypes from "prop-types";
import ArrowSvg from "../../images/arrow-s.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  resetToCurrency,
  resetToFilter,
  setFromCurrency,
  setToCurrency,
  setToFilter,
} from "../../service/actions/exchangerActions";
import useCurrencyFilter from "../../hooks/useCurrencyFilter";

const CurrencyInput = ({ directionToTrack }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const exchangerStore = useSelector((store) => store.exchanger);
  const filteredCurrencies = useCurrencyFilter(
    exchangerStore,
    directionToTrack
  );

  const handleInputChange = (newValue) => {
    setInput(newValue);
  };

  // TODO: Доделать
  const handleSelectChange = (newCurrencie) => {
    if (directionToTrack === "from") {
      dispatch(setFromCurrency(newCurrencie));
      dispatch(resetToCurrency());
      // dispatch(resetToFilter());
      dispatch(setToFilter("Все"));
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
          {filteredCurrencies.map((currency) => (
            <option value={currency.code} key={currency.code}>
              {currency.name}
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
