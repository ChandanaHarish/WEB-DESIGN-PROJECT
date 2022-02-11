import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./item.scss";

import { getItem } from "../../../redux/actions/details";
const Item = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  let itemId;
  // console.log(location.pathname);

  //To get the user id
  if (location.pathname.includes("/")) {
    const string = location.pathname.split("/");
    itemId = string[string.length - 1];
  }

  //Refresh the page on change
  useEffect(() => {
    dispatch(getItem(itemId));
  }, [dispatch, itemId, location]);
  const data = useSelector((state) => state.details);
  const { files } = data;
  // console.log(files);
  // console.log(data);
  return (
    <div className="container">
      <div className="single-item-card">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={`${files}`} alt={data.itemName}></img>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1>{data.itemName}</h1>
            <p>
              Cost: <span>{data.cost}</span>
            </p>
            <p>
              Address: <span>{data.address}</span>
            </p>
            <p>
              Description: <span>{data.desc}</span>
            </p>
          </div>
        </div>
      </div>
      <h2>Contact Details</h2>
      <p>
        Contact Email: <span>{data.contactEmail}</span>
      </p>
      {data.phone ? (
        <p>
        Phone: <span>{data.phone}</span>
      </p>
      ):(
        <></>
      )}
    </div>
  );
};

export default Item;
