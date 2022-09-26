import React from "react";
import CoinList from "../components/CoinList";
import Nav from "../components/Nav";
import styled from "styled-components";
import Pagination from "../components/Pagination";

const Landing = () => {
  return (
    <Wrapper className="container">
      <Nav />
      <CoinList />
      <Pagination />
      <p className="title">
        {" "}
        Developed by{" "}
        <a target="blank" href="http://onisabi-portfolio.netlify.app/">
          Oniboy.
        </a>
        <br />
        Live API from{" "}
        <a target="blank" href="https://pro.coinmarketcap.com/">
          Coin Market Cap
        </a>
      </p>
    </Wrapper>
  );
};

export default Landing;
const Wrapper = styled.div``;
