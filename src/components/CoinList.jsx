import React from "react";
import styled from "styled-components";
import SingleCoin from "./SingleCoin";
const CoinList = () => {
  const coinList = [
    {
      coin: "eth",
      price: 1629,
      change: -10,
    },
    {
      coin: "btc",
      price: 1629,
      change: 133,
    },
    {
      coin: "etc",
      price: 36.443,
      change: 1244,
    },
    {
      coin: "lunc",
      price: 0.00443,
      change: -5,
    },
    {
      coin: "gem",
      price: 43,
      change: -0.1,
    },
  ];
  return (
    <Wrapper>
      {coinList.map((e) => (
        <SingleCoin key={e.coin} {...e} />
      ))}
    </Wrapper>
  );
};

export default CoinList;
const Wrapper = styled.section`
  .list {
    line-height: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    border: 2px solid var(--primary-200);
    padding: 0.2rem;
    border-radius: 10px;
  }
  .coin__details {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }
  .coin p {
    text-transform: uppercase;
    font-style: bold;
    font-weight: bold;
  }
  .btn {
    width: 100%;
    max-width: 90px;
  }
`;
