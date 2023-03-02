const Word = require("../models/wordModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const dotenv = require("dotenv");
dotenv.config()

exports.createWord = catchAsyncErrors(async (req, res, next) => {
    const word = await Word.create(req.body);
    res.status(201).json({
        success: true,
        word,
    });
});


exports.getAllWords = catchAsyncErrors(async (req, res, next) => {
    const words = await Word.find();
    res.status(200).send({
        success: true,
        words,

    });
});