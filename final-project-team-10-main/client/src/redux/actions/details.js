import { GETITEM } from "../constants/actionTypes";
import { fetchItem } from "../../api/index";
//Get Item
export const getItem = (id) => async (dispatch) => {
  try {
    const { data } = await fetchItem(id);
    console.log(data);
    dispatch({
      type: GETITEM,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};
