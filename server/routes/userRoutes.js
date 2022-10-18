const express = require("express");
const {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
} = require("../controllers/userControllers");

const router = express.Router();

router.route("/users").get(getAllUsers).post(createUser);
router.route("/users/:id").patch(updateUser).delete(deleteUser).get(getUser);

module.exports = router;
