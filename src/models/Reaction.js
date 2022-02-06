const { Schema } = require("mongoose");
const moment = require("moment");

const assignmentSchema = {
  assignmentId: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  username: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 50,
    default: "Default Assignment",
  },
  thought: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  friend: {
    type: Date,
    default: moment(),
  },
};

const schema = new Schema(assignmentSchema);

module.exports = schema;
