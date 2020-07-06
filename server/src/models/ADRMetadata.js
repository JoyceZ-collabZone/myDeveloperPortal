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
  profile: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "ProfileModel",
      required: false,
    },
  ],
  legalEntityId: {
    type: String,
    required: false,
  },

  legalEntityName: {
    type: String,
    required: false,
  },
  legalEntityDescription: {
    type: String,
    required: false,
  },
  legalEntityLogoURL: {
    type: String,
    required: false,
  },
  industry: {
    type: String,
    required: false,
  },
  dataRecipientProduct: {
    type: String,
    required: false,
  },
  dataRecipientProductDescription: {
    type: String,
    required: false,
  },

  dataRecipientProductStatus: {
    type: String,
    required: false,
  },

  lastUpdated: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("ADRMetadataModel", ADRSchema);
