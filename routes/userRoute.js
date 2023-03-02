const express = require("express");
const { getAllWords, createWord } = require("../controllers/randomWord");
const {
    createUser,
    // updateUser,
    deleteUser,
    getUserDetails,
    getAllUsers,

} = require("../controllers/userController");

const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/words").get(getAllWords);
router.route("/user/create").post(createUser);
router.route("/word/create").post(createWord);
// router.route("/product/delete/:id").delete(deleteUser);

router.route("/user/:id").get(getUserDetails);

module.exports = router;
