import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectCoin, setSelectCoin] = useState(["xx", null]);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setIsLoading(false);
      });
  }, []);
  const onChange = (event) => {
    const value = event.target.value.split(" ");
    setSelectCoin([Number(value[0]), value[1]]);
  };
  const onChangeAmount = (event) => {
    setAmount(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! ({isLoading ? "Loading.." : coins.length})</h1>
      {isLoading ? (
        <strong>Loding...</strong>
      ) : (
        <div>
          <select
            value={`${selectCoin[0]} ${selectCoin[1]}`}
            onChange={onChange}
          >
            <option value="xx null" disabled>
              Please Select a Coin
            </option>
            {coins.map((coin) => {
              return (
                <option
                  value={`${coin.quotes.USD.price} ${coin.name}`}
                  key={coin.id}
                >
                  {coin.name} ({coin.symbol}) {coin.quotes.USD.price.toFixed(2)}{" "}
                  USD
                </option>
              );
            })}
          </select>
          {selectCoin[0] !== "xx" ? (
            <div>
              <hr />
              <div>
                <label htmlFor="usd">USD </label>
                <input
                  value={amount}
                  onChange={onChangeAmount}
                  id="usd"
                  placeholder="USD"
                  type="number"
                />
              </div>
              <div>
                <label htmlFor="coin">{selectCoin[1]} </label>
                <input
                  value={(amount / selectCoin[0]).toFixed(10)}
                  disabled
                  id="coin"
                  placeholder="Coin"
                  type="number"
                />
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default App;
