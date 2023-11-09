const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  media: {
    type: [String],
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Event", eventSchema);
