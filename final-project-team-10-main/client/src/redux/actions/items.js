import { GETITEMS, CREATEITEM, GETSEARCHITEMS } from "../constants/actionTypes";
import { fetchItems, createItem, fetchItemsBySearch } from "../../api";

//Get Items
export const getItems = () => async (dispatch) => {
  try {
    const { data } = await fetchItems();
    dispatch({
      type: GETITEMS,
      payload: {
        items: data,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

//Search Items
export const getItemsBySearch = (searchQuery) => async (dispatch) => {
  const { searchText } = searchQuery;
  console.log(searchText);
  try {
    const { data } = await fetchItemsBySearch(searchText);
    dispatch({
      type: GETSEARCHITEMS,
      payload: {
        items: data,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

//Create Item
export const addItem = (item) => async (dispatch) => {
  try {
    const { data } = await createItem(item);
    console.log(data);
    dispatch({
      type: CREATEITEM,
      payload: data,
    });
  } catch (err) {
    console.log(err.response.data);
  }
};
