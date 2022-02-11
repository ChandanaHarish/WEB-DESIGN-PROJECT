import React from "react";
import Form from "../../components/Form/Form";
import "./rent.scss";
const Rent = () => {
    const option = "Rent";
  return (
    <div className="container">
      <h2 className="page-title">
        <span>Rent Item </span>
      </h2>
      <Form option={option} />
    </div>
  );
};

export default Rent;
