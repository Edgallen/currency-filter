const initialState = {
  filterCodes: {
    Криптовалюты: ["BTC", "ETH", "USDTTRC"],
    Наличные: ["CASHUSD", "CASHRUB"],
    Банки: ["ACRUB", "SBERRUB", "TCSBRUB"],
  },
  tabFilters: ["Все", "Криптовалюты", "Наличные", "Банки"],
  fromActiveFilter: "Все",
  toActiveFilter: "Все",
};

export const exchangerReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
