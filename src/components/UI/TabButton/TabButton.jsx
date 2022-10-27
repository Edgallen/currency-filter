import React from "react";
import styles from "./TabButton.module.scss";
import PropTypes from "prop-types";

const TabButton = ({ active, value, onClickCallback }) => {
  return (
    <div
      className={`${styles.currencyFilter__button}${
        active ? " " + styles.currencyFilter__button__active : ""
      }`}
      onClick={() => onClickCallback(value)}
    >
      {value}
    </div>
  );
};

TabButton.propTypes = {
  active: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func,
};

export default TabButton;
