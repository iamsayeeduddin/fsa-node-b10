import courseModel from "../models/coursesModel.js";
import { getOptions } from "../utils/utils.js";

/// 10 Records = 1 Page - 100 Records
/// 10 Records = 1 - 105 Records
// Page Size 10

/// Skip = (page - 1) * page size
// 1st Page = 1-10
// 2nd Page = 11 - 20

const get = async (req, res) => {
  try {
    const { sort, dir, skip, pageSize } = getOptions(req);
    const courses = await courseModel
      .find()
      .sort({ [sort]: dir })
      .skip(skip)
      .limit(pageSize);
    const totalRecords = await courseModel.countDocuments();
    res.status(200).json({ message: "Courses Fetched Successfully!", success: true, data: courses, totalRecords });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error!", success: false });
  }
};

const add = async (req, res) => {
  try {
    const data = req.body;
    data.createdAt = new Date();
    const course = new courseModel(data);
    await course.save();
    res.status(201).json({ message: "Course Added Successfully!", success: true });
  } catch (e) {
    console.log("error", e);
    res.status(500).json({ message: "Internal Server Error!", success: false });
  }
};

const update = async (req, res) => {
  try {
    const courseId = req.body._id;
    const updateData = req.body;
    delete updateData._id;
    await courseModel.findOneAndUpdate({ _id: courseId }, updateData);
    res.status(200).json({ message: "Course updated Successfully!", success: true });
  } catch (error) {
    console.log("error", e);
    res.status(500).json({ message: "Internal Server Error!", success: false });
  }
};

const updatePut = async (req, res) => {
  try {
    const courseId = req.body._id;
    const updateData = req.body;
    delete updateData._id;
    await courseModel.findOneAndUpdate(
      { _id: courseId },
      {
        $set: {
          name: updateData.name,
          price: updateData.price,
          rating: updateData.rating,
          // duration: updateData.duration,
          trainer: updateData?.trainer || "",
        },
      }
    );
    res.status(200).json({ message: "Course updated Successfully!", success: true });
  } catch (error) {
    console.log("error", e);
    res.status(500).json({ message: "Internal Server Error!", success: false });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    await courseModel.findOneAndDelete({ _id: courseId });
    res.status(200).json({ message: "Course Deleted Successfully!", success: true });
  } catch (error) {
    console.log("error", e);
    res.status(500).json({ message: "Internal Server Error!", success: false });
  }
};
export { get, add, update, updatePut, deleteCourse };
