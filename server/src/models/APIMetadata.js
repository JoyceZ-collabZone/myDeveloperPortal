const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  endpoint: {
    type: String,
    required: false,
  },
  scope: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  permission: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("apimetadatamodel", apiSchema);
