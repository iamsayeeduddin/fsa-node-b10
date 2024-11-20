import express from "express";

const app = express();

app.listen(5000, () => console.log("Server is up & Running!"));

let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
];

app.use("/welcome", (req, res) => {
  res.status(200).send("Welcome to Express JS!");
});

app.use("/books", (req, res) => {
  res.status(200).json(books);
});

/// HTTP METHODS - GET, POST, PATCH, PUT, DELETE
