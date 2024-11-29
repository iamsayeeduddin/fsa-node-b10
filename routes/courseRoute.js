import express from "express";
import { add, deleteCourse, get, update, updatePut } from "../controller/courseCtrl.js";
const router = express.Router();

router.get("/courseList", get);
router.get("/courseList/:page/:pageSize", get);
router.post("/addCourse", add);
router.patch("/updateCourse", update);
router.put("/compUpdateCourse", updatePut);
router.delete("/deleteCourse/:id", deleteCourse);

export default router;
