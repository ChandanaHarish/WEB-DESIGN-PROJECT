import mongoose from "mongoose";

//Item Schema
const itemSchema = mongoose.Schema({
  itemName: {
    type: String,
    required: "Name cannot be empty",
  },
  option: {
    type: String,
    required: "Option cannot be empty",
  },
  cost: {
    type: String,
    required: "Cost cannot be empty",
  },
  desc: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  files: {
    type: [String],
    default: [],
  },
  creator: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: "Address cannot be empty",
  },
  city: {
    type: String,
    required: "City cannot be empty",
  },
  state: {
    type: String,
    required: "State cannot be empty",
  },
  country: {
    type: String,
    required: "Country cannot be empty",
  },
  contactEmail: {
    type: String,
    required: "Contact email cannot be left empty",
  },
  phone: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastModifiedAt: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model("itemSchema", itemSchema);

export default Item;
