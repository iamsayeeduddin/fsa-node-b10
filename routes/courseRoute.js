import express from "express";
import { get } from "../controller/courseCtrl.js";
const router = express.Router();

router.get("/courseList", get);

export default router;
