import React, { useState } from "react";
import "./sub-nav.scss";
import { useNavigate } from "react-router-dom";
import { getItemsBySearch } from "../../../redux/actions/items";

//Import Redux
import { useDispatch } from "react-redux";

const SubNav = () => {
  //Search Text
  const [searchText, setSearchText] = useState("");

  //Dispatch
  const dispatch = useDispatch();

  //Navigate
  const navigate = useNavigate();

  //Search function
  const searchItems = () => {
    if (searchText.trim()) {
      dispatch(getItemsBySearch({ searchText }));
      navigate(`/items/search?searchQuery=${searchText || "none"}`);
      setSearchText("");
    } else {
      navigate("/");
    }
  };
  //On Enter
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchItems();
    }
  };
  return (
    <div className="sub-nav">
      <div className="container">
        <div className="nav-filters">
          <div className="nav-filter">
            <div className="search-box">
              <input
                type="text"
                value={searchText}
                className=""
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Type address, name, or anything"
                onKeyUp={handleKeyPress}
              ></input>
              <button className="search-btn" onClick={searchItems}>
                <svg
                  aria-hidden="true"
                  className="s-input-icon s-input-icon__search svg-icon iconSearch"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="#006aff"
                    d="m18 16.5-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 112 7a5 5 0 0110 0Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
