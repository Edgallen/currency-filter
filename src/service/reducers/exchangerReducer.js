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

const initialState = {
  filterCodes: {
    Криптовалюты: ["BTC", "ETH", "USDTTRC"],
    Наличные: ["CASHUSD", "CASHRUB"],
    Банки: ["ACRUB", "SBERRUB", "TCSBRUB"],
  },
  tabFilters: ["Все", "Криптовалюты", "Наличные", "Банки"],
  activeFilters: {
    to: "Все",
    from: "Все",
  },
  selectedCurrencies: {
    to: "-",
    from: "-",
  },
  directions: {
    data: [],
    isLoading: false,
    isFailed: false,
  },
  filter: {
    data: [],
    isLoading: false,
    isFailed: false,
  },
};

export const exchangerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTER_REQUEST: {
      return {
        ...state,
        filter: {
          ...state.filter,
          isLoading: true,
          isFailed: false,
        },
      };
    }
    case GET_FILTER_SUCCESS: {
      return {
        ...state,
        filter: {
          ...state.filter,
          isLoading: false,
          data: action.payload,
        },
      };
    }
    case GET_FILTER_FAILED: {
      return {
        ...state,
        filter: {
          ...state.filter,
          isLoading: false,
          isFailed: true,
        },
      };
    }
    case GET_DIRECTIONS_REQUEST: {
      return {
        ...state,
        directions: {
          ...state.directions,
          isLoading: true,
          isFailed: false,
        },
      };
    }
    case GET_DIRECTIONS_SUCCESS: {
      return {
        ...state,
        directions: {
          ...state.directions,
          isLoading: false,
          data: action.payload,
        },
      };
    }
    case GET_DIRECTIONS_FAILED: {
      return {
        ...state,
        directions: {
          ...state.directions,
          isLoading: false,
          isFailed: true,
        },
      };
    }
    case SET_FROM_FILTER_TAB: {
      return {
        ...state,
        activeFilters: {
          ...state.activeFilters,
          from: action.payload,
        },
      };
    }
    case SET_TO_FILTER_TAB: {
      return {
        ...state,
        activeFilters: {
          ...state.activeFilters,
          to: action.payload,
        },
      };
    }
    case SET_FROM_CURRENCY: {
      return {
        ...state,
        selectedCurrencies: {
          ...state.selectedCurrencies,
          from: action.payload,
        },
      };
    }
    case SET_TO_CURRENCY: {
      return {
        ...state,
        selectedCurrencies: {
          ...state.selectedCurrencies,
          to: action.payload,
        },
      };
    }
    case RESET_TO_CURRENCY: {
      return {
        ...state,
        selectedCurrencies: {
          ...state.selectedCurrencies,
          to: "-",
        },
      };
    }
    default: {
      return state;
    }
  }
};
