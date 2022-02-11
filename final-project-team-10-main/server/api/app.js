import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./routes/index.js";
import dotenv from "dotenv";

//For masking the URL and credentials
dotenv.config();

const app = express();

//Middlewares
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(cors());

//API Home
app.get("/", (req, res) => {
  res.send("Welcome to Zillow Clone API");
});

//DB Connection
mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//For setting Routes
routes(app);

export default app;
