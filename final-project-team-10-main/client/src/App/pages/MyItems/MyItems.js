
import React from "react";
import { Link } from "react-router-dom";
import time from "../../../helpers/time";
import "./myitems.scss";



const MyItems = ({ item }) => {
    return (
        <div className="myItems">
            <Link to={`/${item._id}`}>
                <div>
                    <img src="images/aptimage.png" width="300" height="200"/>
                    <img src="images/aptimage2.png" width="300" height="200"/>
                    <img src="images/aptimage3.png" width="300" height="200"/>
                    <img src="images/aptimage4.png" width="300" height="200"/>
                </div>
                <div className="myItemsInfo">
                    <div className="myItemsWillow">
                        <h2>Willow</h2>
                    </div>
                    <div>
                        <div className="myItemsDesc">
                            <h3>{item.itemName}</h3>
                            <h4>{item.cost}</h4>
                            <p>{item.desc}</p>
                            <p>{item.option}</p>
                            <p>{item.address},{item.city},{item.state},{item.country}</p>
                        </div>
                        <div className="myItemsContactInfo">
                            <span><strong>Contact Info</strong></span><br/>
                            <span>Email:{item.contactEmail}</span><br/>
                            <span>Phone no:{item.phone}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MyItems;
