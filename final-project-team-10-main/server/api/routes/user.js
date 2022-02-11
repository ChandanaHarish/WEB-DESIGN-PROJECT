import express from "express";

import { signUp, signIn } from "../controllers/user.js";

const userRouter = express.Router();

//User Routes
userRouter.post("/signup", signUp);
userRouter.post("/signin", signIn);

export default userRouter;
