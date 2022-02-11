import User from "../models/user.js";


//Check if user exists
export const checkUser = (email) => {
  const promise = User.findOne({email});
  return promise;
};

//Create new user
export const createUser = ({firstName, lastName, email, password}) => {
  const promise = User.create({
    email,
    password,
    name: `${firstName} ${lastName}`,
  });
  return promise;
};
