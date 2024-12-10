import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  userRole: { type: Number, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, default: Date.now },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;

// 1 = Super Admin
// 2 = Admin
// 3 = User (Employee)
// 4 = User (Student)
