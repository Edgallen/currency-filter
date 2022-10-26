import React, { useState } from "react";
import styles from "./CurrencyInput.module.scss";
import ArrowSvg from "../../images/arrow-s.svg";

const CurrencyInput = () => {
  const [inputs, setInputs] = useState({
    from: "",
  });

  const handleInputChange = (newValue, key) => {
    const newInputs = { ...inputs, [key]: newValue };
    setInputs(newInputs);
  };

  return (
    <div className={styles.input__wrapper}>
      <input
        type="text"
        className={styles.input}
        value={inputs.from}
        onChange={(event) => handleInputChange(event.target.value, "from")}
      />
      <div className={styles.input__wrapper}>
        <select
          className={styles.input__select}
          name="currency"
          id="currency-select"
        >
          <option value="">-</option>
          <option value="BTC">BTC</option>
          <option value="RUB">RUB</option>
        </select>
        <ArrowSvg className={styles.input__icon} />
      </div>
    </div>
  );
};

export default CurrencyInput;
