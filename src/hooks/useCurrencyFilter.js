import { useMemo } from "react";

const filterFromBySelectedTab = (store, arrayToFilter, direction) => {
  const activeFilter = store.activeFilters[direction];
  const selectedCode = store.filterCodes[activeFilter];
  const filteredArr = arrayToFilter.filter((element) =>
    selectedCode.includes(element.code)
  );

  return filteredArr;
};

export default function useCurrencyFilter(store, direction) {
  if (direction === "from") {
    const filteredFromCurrency = useMemo(() => {
      if (store.activeFilters.from === "Все") {
        return store.directions.data;
      }

      return filterFromBySelectedTab(store, store.directions.data, "from");
    }, [store.activeFilters.from]);

    return filteredFromCurrency;
  }

  const filteredToCurrency = useMemo(() => {
    if (store.selectedCurrencies.from !== "-") {
      const foundFilters = store.filter.data.find(
        (element) => element.from.code === store.selectedCurrencies.from
      );
      if (store.activeFilters.to === "Все") {
        return foundFilters.to;
      }

      return filterFromBySelectedTab(store, foundFilters.to, "to");
    }

    if (store.activeFilters.to === "Все") {
      return store.directions.data;
    }

    return filterFromBySelectedTab(store, store.directions.data, "to");
  }, [
    store.selectedCurrencies.from,
    store.selectedCurrencies.to,
    store.activeFilters.to,
  ]);

  return filteredToCurrency;
}
