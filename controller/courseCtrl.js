import courseModel from "../models/coursesModel.js";

const get = async (req, res) => {
  try {
    const courses = await courseModel.find();
    res.status(200).json({ message: "Courses Fetched Successfully!", success: true, data: courses });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error!", success: false });
  }
};

export { get };
