import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import SingleCoin from "./SingleCoin";
import { RiArrowUpDownLine } from "react-icons/ri";
const CoinList = () => {
  const { isLoading, fetchData, pageNumber, coinList, priceChange } =
    useAppContext();
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [pageNumber]);
  return (
    <Wrapper className="container">
      <header className="header">
        <p>name</p>
        <div className="price__change">
          <p>price</p>
          <button className="btn">
            {priceChange}
            <RiArrowUpDownLine />
          </button>
          {/* <div className="dropDown">
            <p>1D</p>
            <p>1D</p>
            <p>2D</p>
          </div> */}
        </div>
      </header>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {coinList.map((e, index) => (
            <SingleCoin key={index} {...e} />
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default CoinList;
const Wrapper = styled.section`
  min-height: 50vh;
  margin: auto;
  .container {
    max-width: 600px;
  }
  .header,
  .header > .price__change {
    line-height: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 150px;
    * {
      text-transform: uppercase;
      font-weight: bold;
    }
  }
  .price__change {
    position: relative;
  }
  .dropDown {
    /* display: none; */
    position: absolute;
    bottom: -5rem;
    right: 0.2rem;
    background-color: var(--grey-300);
    z-index: 99;
  }
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
