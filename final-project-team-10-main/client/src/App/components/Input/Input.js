import React from "react";
import "./input.scss";
const Input = ({
  name,
  type,
  labelName,
  changeHandler
}) => {
  return (
    <div className="input-field">
      <input
        type={type}
        name={name}
        data-label={labelName}
        onChange={changeHandler}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default Input;
