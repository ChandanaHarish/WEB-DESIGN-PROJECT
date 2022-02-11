import React from "react";
import { Link } from "react-router-dom";
import time from "../../../helpers/time";
import "./card.scss";

const Card = ({ item }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12">
      <div className="card">
        <Link to={`/items/${item._id}`}>
          <div className="card-img">
            <img
              src={`${item.files.length > 1 ? item.files[1] : item.files}`}
              alt={item.itemName}
            />
          </div>
          <div className="card-desc">
            <p className="price">
              <span>$ </span>
              {item.cost}
            </p>
            <p>{item.address}</p>
            <p className="model">{item.option}</p>
          </div>
          <div className="card-footer">
            <span>{item.city}</span>
            <span>{time(item.createdAt)}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
