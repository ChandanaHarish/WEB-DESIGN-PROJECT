import { GETITEM } from "../constants/actionTypes";

const initState = [];

//Get Item
const details = (state=initState, action) => {
  switch (action.type) {
    case GETITEM:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

export default details;