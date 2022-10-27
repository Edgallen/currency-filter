import React from "react";
import styles from "./CurrencyBlock.module.scss";
import PropTypes from "prop-types";
import CurrencyFilter from "../CurrencyFilter/CurrencyFilter";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";

const CurrencyBlock = ({ title, directionToTrack }) => {
  const exchangerStore = useSelector((store) => store.exchanger);

  if (exchangerStore.directions.isLoading || exchangerStore.filter.isLoading) {
    return (
      <Oval
        height={45}
        width={45}
        color="#FF585D"
        wrapperStyle={{}}
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ff8488"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    );
  }

  if (exchangerStore.directions.isFailed || exchangerStore.filter.isFailed) {
    return <h1>Произошла ошибка...</h1>;
  }

  return (
    <div className={styles.currencyBlock}>
      <h1 className={styles.currencyBlock__title}>{title}</h1>
      <CurrencyFilter
        activeFilter={exchangerStore.activeFilters[directionToTrack]}
        direction={directionToTrack}
      />
      <CurrencyInput directionToTrack={directionToTrack} />
    </div>
  );
};

CurrencyBlock.propTypes = {
  title: PropTypes.oneOf(["Отдаёте", "Получаете"]),
  directionToTrack: PropTypes.oneOf(["to", "from"]),
};

export default CurrencyBlock;
