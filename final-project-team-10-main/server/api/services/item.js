import Item from "../models/item.js";

//Get Search Items
export const getSearchItems = (itemName) => {
  const promise = Item.find({
    $or: [{ itemName }, { address: itemName }, { cost: itemName }],
  });
  return promise;
};

//Get All Items
export const getAllItems = (params = {}) => {
  const promise = Item.find(params).exec();
  return promise;
};

//Create Item
export const createItem = (item) => {
  const newItem = new Item(item);
  return newItem.save();
};

//Update Item
export const updateItem = (item) => {
  item._id = item.id;
  item.lastModifiedAt = Date.now();
  const promise = Item.findByIdAndUpdate(item.id, item).exec();
  return promise;
};

//Delete Item
export const delteItem = (id) => {
  const promise = Item.findByIdAndRemove({ _id: id }).exec();
  return promise;
};

//Get Single Item
export const getItem = (id) => {
  const promise = Item.findById(id).exec();
  return promise;
};
