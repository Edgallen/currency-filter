import React, { useEffect } from "react";
import styles from "./CurrencyExchanger.module.scss";
import CurrencyBlock from "../CurrencyBlock/CurrencyBlock";
import { useDispatch } from "react-redux";
import {
  getDirections,
  getFilter,
} from "../../service/actions/exchangerActions";

const CurrencyExchanger = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDirections());
    dispatch(getFilter());
  }, []);

  return (
    <div className={styles.currencyExchanger}>
      <CurrencyBlock title={"Отдаёте"} directionToTrack={"from"} />
      <CurrencyBlock title={"Получаете"} directionToTrack={"to"} />
    </div>
  );
};

export default CurrencyExchanger;
