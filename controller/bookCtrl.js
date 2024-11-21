let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
];

const getBooks = (req, res) => {
  res.status(200).json(books);
};

const addBook = (req, res) => {};

export { getBooks };
