const mongoose = require("mongoose");
const profileEnum = ["developer", "ADR admin", "staff", "unknown"];
const profileSchema = new mongoose.Schema({
  profilename: {
    type: String,
    enum: profileEnum,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ProfileModel", profileSchema);
