const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please add an email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
      trim: true,
      index: true,
    },
    userName: {
      type: String,
      unique: true,
      required: [true, "Please add username"],
      trim: true,
      minLength: [4, "username is too short!"],
      maxLength: 15,
    },
    userId: {
      type: String,
    },
    mobile: {
      type: Number,
      unique: true,
      trim: true,
      minLength: 10,
      maxLength: 10,
    },
    location: {
      type: String,
      trim: true,
    },
    profilePhoto: {
      type: String,
    },
    hash: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
);

module.exports = mongoose.model("User", UserSchema);
