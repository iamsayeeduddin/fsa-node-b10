import express from "express";
import { add, deleteCourse, get, update, updatePut } from "../controller/courseCtrl.js";
import { isSuperAdmin, verifyToken } from "../utils/utils.js";
const router = express.Router();

// router.get("/courseList", get);
// router.get("/courseList/:page/:pageSize", get);
// router.post("/addCourse", verifyToken, isSuperAdmin, add);
// router.patch("/updateCourse", verifyToken, update);
// router.put("/compUpdateCourse", verifyToken, updatePut);
// router.delete("/deleteCourse/:id", verifyToken, isSuperAdmin, deleteCourse);

// Public APIs
router.get("/courseList", get);
router.get("/courseList/:page/:pageSize", get);
// Private API's
router.use(verifyToken);
router.post("/addCourse", isSuperAdmin, add);
router.patch("/updateCourse", update);
router.put("/compUpdateCourse", updatePut);
router.delete("/deleteCourse/:id", isSuperAdmin, deleteCourse);

export default router;
