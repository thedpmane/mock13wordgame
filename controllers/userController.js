const User = require("../models/userModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const dotenv = require("dotenv");
dotenv.config()
// Create User -- Admin
exports.createUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.create(req.body);
    res.status(201).json({
        success: true,
        user,
    });
});


exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {

    const users = await User.find();
    res.status(200).send({
        success: true,
        users,

    });
});


// Get User Details
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHander("User not found", 404));
    }

    res.status(200).json({
        success: true,
        user,
    });
});



// // Delete User

// exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
//     const user = await User.findById(req.params.id);

//     if (!user) {
//         return next(new ErrorHander("User not found", 404));
//     }

//     await User.findByIdAndDelete(req.params.id);

//     res.status(200).json({
//         success: true,
//         message: "User Delete Successfully",
//     });
// });

