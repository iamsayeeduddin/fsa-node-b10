let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
];

const getBooks = (req, res) => {
  res.status(200).json(books);
};

const addBook = (req, res) => {
  let book = req.body;
  book.id = books[books.length - 1].id + 1;
  books.push(book);
  res.status(201);
  res.json({ message: "Book Added Successfully!", success: true });
};

const editBook = (req, res) => {
  let bookId = req.params.id;
  let updateData = req.body;

  let bookInx = books.findIndex((ele) => ele.id === parseInt(bookId));

  if (bookInx > -1) {
    let objBook = { ...books[bookInx] };
    objBook = {
      ...objBook,
      ...updateData,
    };
    books[bookInx] = objBook;
    res.status(200);
    res.json({ message: "Book updated Successfully!", success: true });
  } else {
    res.status(404);
    res.json({ message: "Book Doesn't Exist!", success: false });
  }
};

export { getBooks, addBook, editBook };
