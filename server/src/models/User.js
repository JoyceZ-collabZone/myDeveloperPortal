const mongoose = require("mongoose");

const profileOption = ["developer", "ADR"];
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profile: [{
        type: mongoose.Schema.ObjectId,
        ref: "ProfileModel",
        required: false,
    }, ],
});

module.exports = mongoose.model("UserModel", userSchema);