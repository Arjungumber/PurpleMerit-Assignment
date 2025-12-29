const express = require("express");
const {
    getAllUsers,
    activateUser,
    deactivateUser,
} = require("../controllers/admin.controller");

const authMiddleware = require("../middleware/auth.Middleware");
const adminOnly = require("../middleware/auth.Middleware");
const router = express.Router();

router.use(authMiddleware);
router.use(adminOnly);

router.get("/users", getAllUsers);
router.put("/users/:id/activate", activateUser);
router.put("/users/:id/deactivate", deactivateUser);

module.exports = router;