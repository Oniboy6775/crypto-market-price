import React from "react";
import { useAppContext } from "../context/appContext";

const Loading = () => {
  const { message } = useAppContext();
  return (
    <div>
      <div className="loading"></div>
      <h4 className="title">{message ? message : "Loading"}</h4>
    </div>
  );
};

export default Loading;
