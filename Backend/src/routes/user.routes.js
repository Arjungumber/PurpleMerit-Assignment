const express = require("express");
const {
    getMyProfile,
    updateMyProfile,
    changePassword,
} = require("../controllers/user.controller");

const router = express.Router();


router.get("/me", getMyProfile);
router.put("/me", updateMyProfile);
router.put("/me/password", changePassword);

module.exports = router;
