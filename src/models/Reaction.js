const { Schema } = require("mongoose");
const moment = require("moment");

const reactionSchema = {
  reactionId: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  reactionBody: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: moment(),
  },
};

const schema = new Schema(reactionSchema);

module.exports = schema;
