import React, { useState } from "react";
import FileBase from "react-file-base64";
import "./form.scss";
//Navigate
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/actions/items";
const Form = ({ option }) => {
  const dispatch = useDispatch();
  const history = useNavigate();

  //User
  const user = JSON.parse(localStorage.getItem("profile"));

  //State for form data
  const [itemData, setItemData] = useState({
    itemName: "",
    cost: "",
    model: "",
    option: option,
    desc: "",
    files: [],
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    userName: user?.result.name,
    creator: user?.result.name,
    contactEmail: user?.result.email,
  });

  const images = [];
  //Adding files inside state
  const setFiles = (files) => {
    files.forEach((file) => {
      console.log(file);
      let { base64 } = file;
      images.push(base64);
      setItemData({ ...itemData, files: images });
    });
  };

  //Clear input on submit
  const clear = () => {
    setItemData({
      itemName: "",
      cost: "",
      model: "",
      option: option,
      desc: "",
      files: [],
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
    });
  };

  //Submit Form
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(itemData);
    const {
      itemName,
      cost,
      model,
      option,
      desc,
      files,
      address,
      city,
      state,
      country,
    } = itemData;
    if (
      itemName === "" ||
      cost === "" ||
      model === "" ||
      option === "" ||
      desc === "" ||
      files.length === 0 ||
      address === "" ||
      city === "" ||
      state === "" ||
      country === ""
    ) {
      window.alert("Please enter the required values");
    } else {
      window.alert("Entered");
      console.log(user.result.name);
      setItemData({ itemData });
      console.log(itemData);
      dispatch(addItem(itemData));
      //Clear Input
      clear();
      // //Redirect to home
      history("/");
    }
  };

  return (
    <>
      {user ? (
        <>
          <form>
            <h2>Item Details</h2>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="input-wrapper">
                  <label htmlFor="title" className="required">
                    Property Name
                  </label>
                  <input
                    type="text"
                    className="title"
                    name="title"
                    placeholder="Name of your property"
                    value={itemData.itemName}
                    required
                    onChange={(e) =>
                      setItemData({ ...itemData, itemName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="input-wrapper">
                  <label htmlFor="cost" className="required">
                    Cost{" "}
                  </label>
                  <input
                    type="text"
                    className="cost"
                    name="cost"
                    placeholder="Amount in $"
                    value={itemData.cost}
                    required
                    onChange={(e) =>
                      setItemData({ ...itemData, cost: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="input-wrapper">
                  <label htmlFor="option" className="required">
                    Constructed Year
                  </label>
                  <input
                    type="text"
                    className="option"
                    name="option"
                    placeholder="Model Year / Age"
                    value={itemData.model}
                    required
                    onChange={(e) =>
                      setItemData({ ...itemData, model: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="input-wrapper">
                  <label htmlFor="desc" className="required">
                    Description of Property
                  </label>
                  <textarea
                    className="desc"
                    name="desc"
                    placeholder="Description of the property"
                    value={itemData.desc}
                    required
                    onChange={(e) =>
                      setItemData({ ...itemData, desc: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="input-wrapper">
                  <label htmlFor="images" className="required">
                    Upload the Images
                  </label>
                  <FileBase
                    type="file"
                    multiple={true}
                    onDone={(file) => setFiles(file)}
                    className="images"
                    name="images"
                  ></FileBase>
                </div>
              </div>
            </div>
            <h2>Contact Details</h2>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="input-wrapper">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="phone"
                    className="phone"
                    name="phone"
                    value={itemData.phone}
                    required
                    onChange={(e) =>
                      setItemData({ ...itemData, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12"></div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="input-wrapper">
                  <label htmlFor="address" className="required">
                    Address
                  </label>
                  <textarea
                    className="address"
                    name="address"
                    value={itemData.address}
                    required
                    onChange={(e) =>
                      setItemData({ ...itemData, address: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="input-wrapper">
                  <label htmlFor="city" className="required">
                    City
                  </label>
                  <input
                    type="text"
                    className="city"
                    name="city"
                    value={itemData.city}
                    required
                    onChange={(e) =>
                      setItemData({ ...itemData, city: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="input-wrapper">
                  <label htmlFor="state" className="required">
                    State
                  </label>
                  <input
                    type="text"
                    className="state"
                    name="state"
                    value={itemData.state}
                    required
                    onChange={(e) =>
                      setItemData({ ...itemData, state: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="input-wrapper">
                  <label htmlFor="country" className="required">
                    Country
                  </label>
                  <input
                    type="text"
                    className="country"
                    name="county"
                    value={itemData.country}
                    required
                    onChange={(e) =>
                      setItemData({ ...itemData, country: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="form-cta">
              <button className="primary-btn" onClick={submitHandler}>
                Add Item
              </button>
              <button className="secondary-btn">Cancel</button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1>Please login to {option} your item</h1>
        </>
      )}
    </>
  );
};

export default Form;
