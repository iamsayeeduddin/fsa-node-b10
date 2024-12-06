import express from "express";
import defaultRouter from "./routes/defaultRoute.js";
import booksRouter from "./routes/booksRoute.js";
import courseRouter from "./routes/courseRoute.js";
import userRouter from "./routes/userRoute.js";
import mongoose from "mongoose";

const app = express();

app.listen(5000, () => console.log("Server is up & Running!"));

const dbURL = process.env.DB_URL;

mongoose
  .connect(dbURL)
  .then(() => console.log("DB Connected Successfully!"))
  .catch((err) => console.log(err));

app.use(express.json()); /// Parses any JSON coming in req

const middleware = (req, res, next) => {
  if (req.body.allow) {
    next();
  } else {
    res.status(401).send({ message: "Unauthorized!", success: false });
  }
};

app.use("/", defaultRouter);

app.use("/books", booksRouter);
app.use("/courses", courseRouter);
app.use("/users", userRouter);

/// HTTP METHODS - GET, POST, PATCH, PUT, DELETE

/// http://localhost:5000/users/getUsersList
/// http://localhost:5000/users/addUser
/// http://localhost:5000/users/updateUser
/// http://localhost:5000/users/deleteUser
