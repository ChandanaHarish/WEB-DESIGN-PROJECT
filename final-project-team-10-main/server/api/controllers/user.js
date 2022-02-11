import { checkUser, createUser } from "../services/user.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Success Response Setter
const setSuccessResponse = ({ result, token }, res) => {
  res.status(200).json({ result, token });
};

//Error Handler
const errorHandler = (message, res) => {
  res.status(500).json({ error: message });
};

//Create token
const createToken = ({ email, _id }) => {
  const token = jwt.sign({ email: email, id: _id }, "test", {
    expiresIn: "1h",
  });
  return token;
};

//Sign up function
export const signUp = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword } = req.body;
  try {
    //Get user from db
    const user = await checkUser(email);

    //Check if user already exists
    if (user) {
      errorHandler("User already exists", res);
    }
    //Check if passwords are same
    if (password !== confirmPassword) {
      errorHandler("Passwords does not match", res);
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    //console.log(firstName, lastName, email, hashedPassword);

    //Create User
    const newUser = await createUser({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    //Token for persisting user session
    const userToken = createToken(newUser);
    //Setting it to result because of Google Auth
    setSuccessResponse({ result: newUser, token: userToken }, res);
  } catch (err) {
    errorHandler(err.message, res);
  }
};

//Signin function
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    //Get user from db
    const user = await checkUser(email);
    //console.log(user);
    //Check if user exists
    if (!user) {
      errorHandler("User does not exist", res);
    }

    //Password Match
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    //Check if passwords match
    if (!isPasswordCorrect) {
      errorHandler("Password does not match", res);
    }

    //Token for persisting user session
    const userToken = createToken(user);
    setSuccessResponse({ result: user, token: userToken }, res);
  } catch (err) {
    errorHandler(err.message, res);
  }
};
