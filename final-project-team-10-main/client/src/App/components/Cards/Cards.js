import React from "react";
import Card from "./Card/Card";
import Loader from "../Loader/Loader";
import "./cards.scss"
const Cards = ({items}) => {
  return (
    <div className="item-card">
      <div className="row">
        {items.length !== 0 && items !== null ? (
          items.map((item) => <Card item={item} key={item._id}/>)
        ) : (
          <div>
            <Loader/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
