const { Schema, model } = require("mongoose");
const moment = require("moment");
const { validateEmail } = require("../utils");

const userSchema = {
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  username: {
    type: String,
    required: true,
    auto: true,
    trimmed: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  thoughts: {
    type: Schema.Types.ObjectId,
    ref: "thoughts",
  },
  friends: {
    type: Schema.Types.ObjectId,
    ref: "friends",
  },
};

const schema = new Schema(userSchema);

const User = model("user", schema);

module.exports = User;
