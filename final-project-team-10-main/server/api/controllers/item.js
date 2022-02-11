import {
  getAllItems,
  getSearchItems,
  createItem,
  updateItem,
  delteItem,
  getItem,
} from "../services/item.js";

//Success Response Setter
const setSuccessResponse = (data, res) => {
  res.status(200).json(data);
};

//Error Handler
const errorHandler = (message, res) => {
  res.status(500).json({ error: message });
};

//Get All Items
export const getAll = async (req, res) => {

  try {
    const items = await getAllItems();
    setSuccessResponse(items, res);
  } catch (err) {
    errorHandler(err.message, res);
  }
};

//Get Search Items
export const getSearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const itemName = new RegExp(searchQuery, "i"); //Case Insensitive
    const items = await getSearchItems(itemName);
    setSuccessResponse(items, res);
  } catch (err) {
    errorHandler(err.message, res);
  }
};

//Create Item
export const create = async (req, res) => {
  try {
    const item = { ...req.body };
    const newItem = await createItem(item);
    setSuccessResponse(newItem, res);
  } catch (err) {
    errorHandler(err.message, res);
  }
};

//Update Item
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const item = { ...req.body, id };
    const updatedItem = await updateItem(item);
    setSuccessResponse(updatedItem, res);
  } catch (err) {
    errorHandler(err.message, res);
  }
};

//Delete Item
export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedItem = await delteItem(id);
    setSuccessResponse(deletedItem, res);
  } catch (err) {
    errorHandler(err.message, res);
  }
};

//Get Single Item
export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await getItem(id);
    // console.log(item);
    setSuccessResponse(item, res);
  } catch (err) {
    errorHandler(err.message, res);
  }
};
