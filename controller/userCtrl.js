import userModel from "../models/usersModel.js";
import { hashPassword, comparePassword, generateToken } from "../utils/utils.js";
import { USER_ROLE } from "../utils/constants.js";

const signup = async (req, res) => {
  try {
    const data = req.body;
    data.createdAt = new Date();
    data.isActive = true;
    if (data.userRole === undefined) {
      data.userRole = USER_ROLE.STUDENT;
    }
    data.password = await hashPassword(data.password);
    const user = new userModel(data);
    await user.save();
    res.status(201).json({ message: "User Added Successfully!", success: true });
  } catch (err) {
    if (err.errorResponse.errmsg.includes("duplicate key")) {
      res.status(400).json({ message: "Email Already Exists!", success: false });
    } else {
      res.status(500).json({ message: "Internal Server Error!", success: false });
    }
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).lean();
    if (user) {
      const isPasswordMatches = comparePassword(password, user.password);
      if (isPasswordMatches) {
        const token = generateToken({ email, name: user.name, id: user._id, userRole: user.userRole });
        return res.status(200).json({
          message: "User Loggedin Successfully!",
          success: true,
          data: {
            name: user.name,
            email: user.email,
            _id: user._id,
            token,
          },
        });
      }
    }
    res.status(401).json({ message: "Incorrect Email or Password!", success: false });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error!", success: false });
  }
};

export { signup, login };
