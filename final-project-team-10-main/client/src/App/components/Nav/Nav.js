import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import "./nav.scss";

import { useDispatch } from "react-redux";
import decode from "jwt-decode";

const Nav = ({searchItems}) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  console.log(user);

  //Logout
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history("/");
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;
    //Check if token has expired
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    //Set Token
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, user]);
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <NavLink to="/" end>
              <h2>Willow</h2>
            </NavLink>
            <div className="add-wrapper">
              {user ? (
                <>
                  <div className="profile">
                    <div className="profileWrap">
                      {user.result?.imageUrl ? (
                        <img
                          className="profile-pic"
                          src={user.result.imageUrl}
                          alt={user.result.name}
                        />
                      ) : (
                        <p className="alter-profile-pic">
                          {user.result.name.charAt(0)}
                        </p>
                      )}
                      {user.result.name}

                      <div className="down-arrow">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 451.847 451.847"
                        >
                          <g>
                            <path
                              d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                            />
                          </g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                      </div>
                    </div>
                    <div className="dropdown">
                      {/* <NavLink to="/your-items">
                        <div className="secondary-link">Your Items</div>
                      </NavLink> */}
                      <NavLink to="/sell">
                        <div className="secondary-link">For Sale</div>
                      </NavLink>
                      <NavLink to="/rent">
                        <div className="secondary-link">For Rent</div>
                      </NavLink>
                      <div className="secondary-link" onClick={logout}>
                        Logout
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <NavLink to="/auth" end>
                  <PrimaryBtn text="Sign In"></PrimaryBtn>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
