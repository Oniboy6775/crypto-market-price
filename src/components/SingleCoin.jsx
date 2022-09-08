import React from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

const SingleCoin = ({ coin, price, change }) => {
  return (
    <div className="list">
      <div className="coin__details">
        <div className="coin">
          <p>{coin}/USDT</p>
          <small>Standard futures</small>
        </div>
        <div className="price">
          <p>{price}</p>
          <small>${price}</small>
        </div>
      </div>
      <button className={change < 0 ? "btn alert-danger" : "btn alert-success"}>
        {change >= 0 ? (
          <BsFillArrowUpCircleFill />
        ) : (
          <BsFillArrowDownCircleFill />
        )}{" "}
        {change}%
      </button>
    </div>
  );
};

export default SingleCoin;
