const express = require("express");
const {
    getAllUsers,
    updateUserStatus,
} = require("../controllers/admin.controller");

const authMiddleware = require("../middleware/auth.Middleware");
const adminOnly = require("../middleware/auth.Middleware");
const router = express.Router();

router.use(authMiddleware);
router.use(adminOnly);

router.get("/users", getAllUsers);
router.put("/users/:id/:action", updateUserStatus);


module.exports = router;