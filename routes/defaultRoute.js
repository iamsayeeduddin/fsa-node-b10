import express from "express";
import { upload } from "../utils/utils.js";

const router = express.Router();

router.post("/welcome", (req, res) => {
  res.status(200).json({ message: "Welcome to My Backend Server!", success: true });
});

router.get("/health", (req, res) => {
  res.status(200).send({ message: "Server is UP & Running!", success: true });
});

router.post("/uploadFile", upload.single("testFile"), (req, res) => {
  try {
    res.status(201).json({ message: "File Uploaded Successfully!", success: true });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error!");
  }
});

export default router;
