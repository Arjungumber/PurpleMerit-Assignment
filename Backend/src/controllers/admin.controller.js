const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        const users = await User.find()
        .select("-password")
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 });

        const totalUsers = await User.countDocuments();

        res.status(200).json({
        success: true,
        data: users,
        pagination: {
            totalUsers,
            currentPage: page,
            totalPages: Math.ceil(totalUsers / limit),
        },
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "Server error",
        });
    }
};

const activateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
        }

        user.status = "active";
        await user.save();

        res.status(200).json({
        success: true,
        message: "User activated successfully",
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "Server error",
        });
    }
};


const deactivateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
        }

        user.status = "inactive";
        await user.save();

        res.status(200).json({
        success: true,
        message: "User deactivated successfully",
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "Server error",
        });
    }
};

module.exports = {
    getAllUsers,
    activateUser,
    deactivateUser,
};