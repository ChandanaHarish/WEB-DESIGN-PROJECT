import React, { useState } from "react";
import Input from "../../components/Input/Input";
import lock from "../../images/lock.svg";
import { GoogleLogin } from "react-google-login";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signin, signup } from "../../../redux/actions/auth";

import "./auth.scss";
const initState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  //States
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initState);

  const dispatch = useDispatch();
  const history = useNavigate();

  //Google Success Response
  const googleSuccess = async (res) => {
    console.log(res);
    const result1 = res?.profileObj;
    const result = {
      email: result1.email,
      familyName: result1.familyName,
      giveName: result1.givenName,
      imageUrl: result1.imageUrl,
      name: result1.name,
      userId: result1.googleId,
    };
    const token = res?.tokenId;
    console.log(result);
    //Dispatches the token
    try {
      dispatch({
        type: "AUTH",
        data: { result, token },
      });
      history("/");
    } catch (error) {
      console.log(error);
    }
  };

  //Google Login Failure
  const googleFailure = (err) => {
    console.log(err);
    console.log("Google Sign In was unsuccessful. Try again.");
  };

  const switchMode = () => {
    setIsSignup((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("In");
    console.log(formData);
    //Dispatch events if Signin or Signup
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  //Change Handler for inputs
  const changeHandler = (e) => {
    console.log("in");
    if (e.target.value !== "") {
      e.target.classList.add("not-empty");
    } else {
      e.target.classList.remove("not-empty");
    }
    setFormData({ ...formData, [e.target.dataset.label]: e.target.value });
  };

  return (
    <div className="container">
      {!user ? (
        <div className="auth-form">
          <div className="title">
            <span>
              <img src={lock} alt="SignIn" />
            </span>
            <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>
          </div>
          <div className="row">
            {isSignup && (
              <>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                  <Input
                    name="First Name"
                    labelName="firstName"
                    autoFocus="true"
                    type="text"
                    changeHandler={changeHandler}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                  <Input
                    name="Last Name"
                    labelName="lastName"
                    autoFocus="false"
                    type="text"
                    changeHandler={changeHandler}
                  />
                </div>
              </>
            )}
            <div className="col-lg-12 col-md-12 col-sm-12 mb-2">
              <Input
                name="Email"
                labelName="email"
                autoFocus="true"
                type="email"
                changeHandler={changeHandler}
              />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 mb-2">
              <Input
                name="Password"
                labelName="password"
                autoFocus="false"
                type={showPassword ? "text" : "password"}
                changeHandler={changeHandler}
                handleShowPassword={handleShowPassword}
              />
            </div>

            {isSignup && (
              <div className="col-lg-12 col-md-12 col-sm-12 mb-2">
                <Input
                  name="Confirm Password"
                  labelName="confirmPassword"
                  label="Repeat Password"
                  changeHandler={changeHandler}
                  type="password"
                ></Input>
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <button
                className="primary-btn"
                type="submit"
                onClick={handleSubmit}
              >
                {isSignup ? "Sign Up" : "Sign In"}
              </button>
              {!isSignup ? (
                <GoogleLogin
                  clientId="632305954430-011k5oujer0i90on7mh7decs94qcdh3b.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      className="primary-btn google-btn"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20"
                        height="20"
                        viewBox="0 0 510 510"
                      >
                        <g>
                          <g id="glass">
                            <path
                              fill="#fff"
                              d="M286.875,229.5v63.75h150.45c-15.3,89.25-86.7,153-175.95,153c-104.55,0-191.25-86.7-191.25-191.25
     s86.7-191.25,191.25-191.25c53.55,0,99.45,22.95,132.6,58.65l45.9-45.9c-45.9-45.9-107.1-76.5-178.5-76.5
     c-140.25,0-255,114.75-255,255s114.75,255,255,255s242.25-114.75,242.25-255v-25.5H286.875z"
                            />
                          </g>
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
                      &nbsp; &nbsp;Google Sign In
                    </button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                />
              ) : (
                <></>
              )}
              <button className="secondary-btn" onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <h2>You're already signed in!</h2>
        </div>
      )}
    </div>
  );
};

export default Auth;
