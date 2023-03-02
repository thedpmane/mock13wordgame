const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        trim: true,
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', "'hard'"],
        required: [true, "Please Enter Difficulty level either 'easy', 'medium' or 'hard'"],
    },
    score: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("User", userSchema);
