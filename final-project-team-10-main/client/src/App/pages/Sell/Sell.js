import React from "react";
import Form from "../../components/Form/Form";
import "./sell.scss"
const Sell = () => {
  const option = "Sell";
  return (
    <div className="container">
      <h2 className="page-title">
        <span>Sell Item </span>
      </h2>
      <Form option={option} />
    </div>
  );
};

export default Sell;
