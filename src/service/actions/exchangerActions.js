import fetchDirections from "../../fetchTestData/fetchDirections";
import fetchFilter from "../../fetchTestData/fetchFilter";
import {
  GET_DIRECTIONS_FAILED,
  GET_DIRECTIONS_REQUEST,
  GET_DIRECTIONS_SUCCESS,
  GET_FILTER_FAILED,
  GET_FILTER_REQUEST,
  GET_FILTER_SUCCESS,
  RESET_TO_CURRENCY,
  SET_FROM_CURRENCY,
  SET_FROM_FILTER_TAB,
  SET_TO_CURRENCY,
  SET_TO_FILTER_TAB,
} from "../constants/exchangerTypes";

const getFilterRequest = () => {
  return {
    type: GET_FILTER_REQUEST,
  };
};

const getFilterSuccess = (filterArray) => {
  return {
    type: GET_FILTER_SUCCESS,
    payload: filterArray,
  };
};

const getFilterFailed = () => {
  return {
    type: GET_FILTER_FAILED,
  };
};

const getDirectionsRequest = () => {
  return {
    type: GET_DIRECTIONS_REQUEST,
  };
};

const getDirectionsSuccess = (directionsArray) => {
  return {
    type: GET_DIRECTIONS_SUCCESS,
    payload: directionsArray,
  };
};

const getDirectionsFailed = () => {
  return {
    type: GET_DIRECTIONS_FAILED,
  };
};

export const setFromFilter = (newFilter) => {
  return {
    type: SET_FROM_FILTER_TAB,
    payload: newFilter,
  };
};

export const setToFilter = (newFilter) => {
  return {
    type: SET_TO_FILTER_TAB,
    payload: newFilter,
  };
};

export const setFromCurrency = (newCurrency) => {
  return {
    type: SET_FROM_CURRENCY,
    payload: newCurrency,
  };
};

export const resetToCurrency = () => {
  return {
    type: RESET_TO_CURRENCY,
  };
};

export const setToCurrency = (newCurrency) => {
  return {
    type: SET_TO_CURRENCY,
    payload: newCurrency,
  };
};

export const getFilter = () => (dispatch) => {
  dispatch(getFilterRequest());

  fetchFilter()
    .then((data) => dispatch(getFilterSuccess(data)))
    .catch((error) => {
      console.log(error);
      dispatch(getFilterFailed());
    });
};

export const getDirections = () => (dispatch) => {
  dispatch(getDirectionsRequest());

  fetchDirections()
    .then((data) => dispatch(getDirectionsSuccess(data)))
    .catch((error) => {
      console.log(error);
      dispatch(getDirectionsFailed());
    });
};
