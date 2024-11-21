import express from "express";
import { getBooks } from "../controller/bookCtrl.js";

const router = express.Router();

router.get("/getBooks", getBooks);

export default router;
