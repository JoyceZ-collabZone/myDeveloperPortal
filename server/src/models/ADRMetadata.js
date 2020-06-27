const mongoose = require("mongoose");

const profileOption = ["developer", "ADR"];
const ADRSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    enum: profileOption,
    required: true,
  },
  legalEntityId: {
    type: String,
    required: false,
  },

  legalEntityName: {
    type: String,
    required: false,
  },
  industry: {
    type: String,
    required: false,
  },
  logoUri: {
    type: String,
    required: false,
  },

  //   dataRecipientProducts: [
  //     {
  //       type: mongoose.Schema.ObjectId,
  //       ref: "SoftwareProductModel",
  //     },
  //   ],
  status: {
    type: String,
    required: false,
  },

  lastUpdated: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("ADRMetadataModel", ADRSchema);
