import mongoose from "mongoose";

//userSchema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: "Name cannot be left empty",
  },
  email: {
    type: String,
    required: "Email cannot be left empty",
  },
  password: {
    type: String,
    required: "Password cannot be left empty",
  },
  id: {
    type: String,
  },
});

const User = mongoose.model("userSchema", userSchema);

export default User;
