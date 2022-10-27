const directionsArr = [
  {
    code: "BTC",
    name: "Bitcoin BTC ",
  },
  {
    code: "ETH",
    name: "Ethereum ETH ",
  },
  {
    code: "CASHUSD",
    name: "Наличные USD ",
  },
  {
    code: "CASHRUB",
    name: "Наличные RUB ",
  },
  {
    code: "ACRUB",
    name: "Альфа-банк RUB ",
  },
  {
    code: "SBERRUB",
    name: "Сбербанк RUB ",
  },
  {
    code: "TCSBRUB",
    name: "Тинькофф RUB ",
  },
  {
    code: "USDTTRC",
    name: "Tether TRC20 USDT ",
  },
];

const fetchDirections = async () => {
  const directionData = new Promise((resolve) => {
    setTimeout(() => {
      resolve(directionsArr);
    }, 500);
  });

  return directionData;
};

export default fetchDirections;
