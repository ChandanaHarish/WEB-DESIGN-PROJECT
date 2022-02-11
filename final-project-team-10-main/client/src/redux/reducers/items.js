import {
    GETSEARCHITEMS,
    GETITEMS,
    CREATEITEM,
    GETUSERITEMS,
  } from "../constants/actionTypes";
  
  const initState = {
    items: [],
  };
  
  const items = (state = initState, action) => {
    switch (action.type) {
      case GETITEMS:
        return {
          ...state,
          ...action.payload,
        };
      case GETSEARCHITEMS:
        return {
          ...state,
          ...action.payload
        };
      case CREATEITEM:
        return {
          ...state,
          ...action.payload,
        };
      case GETUSERITEMS:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  
  export default items;