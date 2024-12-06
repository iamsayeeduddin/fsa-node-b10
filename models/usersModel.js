import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, default: Date.now },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
