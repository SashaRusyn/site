import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    reguired: true,
    unigue: true,
  },
  passwordHash: {
    type: String,
    reguired: true,
  },
});
export default mongoose.model("User", UserSchema);
