import express from "express";
import defaultRouter from "./routes/defaultRoute.js";
import booksRouter from "./routes/booksRoute.js";
import courseRouter from "./routes/courseRoute.js";
import userRouter from "./routes/userRoute.js";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.listen(5000, () => console.log("Server is up & Running!"));

const dbURL = process.env.DB_URL;

const uploadPath = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

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

// fs.readFile("./app.js", (err, data) => console.log(data.toString()));
// fs.writeFile("hello2.txt", "Testing file operations by sayeed", (err) => console.log(err));
// fs.unlink("hello2.txt", (err) => console.log(err));

app.use("/", defaultRouter);

app.use("/books", booksRouter);
app.use("/courses", courseRouter);
app.use("/users", userRouter);

// Global Error Handler
app.use((err, req, res, next) => res.status(400).json({ message: err.message, success: false }));

/// HTTP METHODS - GET, POST, PATCH, PUT, DELETE

/// http://localhost:5000/users/getUsersList
/// http://localhost:5000/users/addUser
/// http://localhost:5000/users/updateUser
/// http://localhost:5000/users/deleteUser
