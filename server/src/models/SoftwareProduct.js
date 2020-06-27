const mongoose = require("mongoose");

const SoftwareProductScheme = new mongoose.Schema({
  softwareProductId: {
    type: String,
    required: true,
  },
  softwareProductName: {
    type: String,
    required: true,
  },
  softwareProductDescription: {
    type: String,
    required: true,
  },
  logoUri: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SoftwareProductModel", SoftwareProductScheme);
