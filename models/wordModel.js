const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    word: {
        type: String,
        required: [true, "Please Enter Your word"],
        trim: true,
    }

});

module.exports = mongoose.model("Word", userSchema);
