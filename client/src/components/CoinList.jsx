import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import SingleCoin from "./SingleCoin";
const CoinList = () => {
  const { isLoading, fetchData, pageNumber, coinList } = useAppContext();
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [pageNumber]);
  return (
    <Wrapper>
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
