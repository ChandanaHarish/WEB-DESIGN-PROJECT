import { AUTH } from "../constants/actionTypes";
import { signIn, signUp } from "../../api";

//Sign in
export const signin = (formData, history) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await signIn(formData);
    dispatch({ type: AUTH, data });
    history("/");
  } catch (err) {
    console.log(err.response.data);
  }
};


//Sign up
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await signUp(formData);
    dispatch({ type: AUTH, data });
    history("/");
  } catch (err) {
    console.log(err.response.data);
  }
};