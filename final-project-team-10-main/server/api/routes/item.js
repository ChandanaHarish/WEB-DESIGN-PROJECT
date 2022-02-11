import express from "express";

import {
  getAll,
  create,
  update,
  remove,
  getOne,
  getSearch,
} from "../controllers/item.js";

//Auth middleware for checking user authentication
import auth from "../middleware/auth.js";

const itemRouter = express.Router();
//Item Routes
itemRouter.get("/search", getSearch);
itemRouter.get("/", getAll);
itemRouter.post("/", auth, create);
itemRouter.put("/:id", auth, update);
itemRouter.delete("/:id", auth, remove);
itemRouter.get("/:id", getOne);

export default itemRouter;
