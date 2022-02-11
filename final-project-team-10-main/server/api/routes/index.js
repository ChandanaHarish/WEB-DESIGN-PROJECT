import itemRouter from "./item.js";
import userRouter from "./user.js";


export default (app) => {
  app.use("/items", itemRouter);
  app.use("/users", userRouter);
};
