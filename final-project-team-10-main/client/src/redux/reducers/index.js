import { combineReducers } from "redux";
import auth from "./auth";
import items from "./items";
import details from "./details";
//Combine the reducers
export default combineReducers({
  auth,
  items,
  details,
});
