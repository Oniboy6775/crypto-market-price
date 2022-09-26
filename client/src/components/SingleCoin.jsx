import React from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { useAppContext } from "../context/appContext";

const SingleCoin = ({ symbol, coinName, price, change, priceChanges }) => {
  const { priceChange } = useAppContext();
  return (
    <div className="list">
      <div className="coin__details">
        <div className="coin">
          <p>{symbol}/USDT</p>
          <small>{coinName}</small>
        </div>
        <div className="price">
          <p>${price}</p>
          <small>₦{(price * 700).toFixed(2)}</small>
        </div>
      </div>
      <button
        className={
          priceChanges[priceChange] < 0
            ? "btn alert-danger"
            : "btn alert-success"
        }
      >
        {change >= 0 ? (
          <BsFillArrowUpCircleFill />
        ) : (
          <BsFillArrowDownCircleFill />
        )}{" "}
        {priceChanges[priceChange]}%
      </button>
    </div>
  );
};

export default SingleCoin;
