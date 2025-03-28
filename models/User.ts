import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: false },
  country: { type: String, required: true },
  metamask: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, select: false },
  role: { type: String, default: "user" },
  status: { type: String, default: false },
});

const memberSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: false },
  country: { type: String, required: true },
  metamask: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, select: false },
  role: { type: String, default: "user" },
  status: { type: String, default: false },
});
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Member = mongoose.models?.Member || mongoose.model("Member", memberSchema);
