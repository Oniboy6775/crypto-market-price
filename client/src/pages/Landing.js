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
    </Wrapper>
  );
};

export default Landing;
const Wrapper = styled.div``;
