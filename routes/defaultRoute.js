import express from "express";

const router = express.Router();

router.post("/welcome", (req, res) => {
  res.status(200).json({ message: "Welcome to My Backend Server!", success: true });
});

router.get("/health", (req, res) => {
  res.status(200).send({ message: "Server is UP & Running!", success: true });
});

export default router;
