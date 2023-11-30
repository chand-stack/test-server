const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bloodGroupe: {
    type: String,
    required: true,
  },
  upazila: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
