import express from "express";
import { addBook, editBook, getBooks } from "../controller/bookCtrl.js";

const router = express.Router();

router.get("/getBooks", getBooks);
router.post("/addBook", addBook);
router.patch("/editBook/:id", editBook);

export default router;
