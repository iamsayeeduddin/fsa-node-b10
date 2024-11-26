import express from "express";
import { addBook, deleteBook, editBook, getBooks } from "../controller/bookCtrl.js";

const router = express.Router();

router.get("/getBooks", getBooks);
router.post("/addBook", addBook);
router.patch("/editBook/:id", editBook);
router.delete("/deleteBook/:id", deleteBook)

export default router;
