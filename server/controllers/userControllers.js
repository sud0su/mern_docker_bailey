const User = require("../models/User");
const AsyncManager = require("../utils/asyncManager");
const LibraryError = require("../utils/libraryError");

exports.createUser = AsyncManager(async (req, res, next) => {
    const newUser = await User.create(req.body);
    return res.status(201).json({ success: true, data: newUser });
});

exports.getAllUsers = AsyncManager(async (req, res, next) => {
    const users = await User.find();
    return res
        .status(201)
        .json({ success: true, total: users.length, data: users });
});

exports.getUser = AsyncManager(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new LibraryError(`User not found`, 404));
    }
    return res.status(201).json({ success: true, data: user });
});

exports.updateUser = AsyncManager(async (req, res, next) => {
    let user = await User.findById(req.params.id);
    if (!user) {
        return next(new LibraryError(`User not found`, 404));
    }
    user = await User.findOneAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    return res.status(201).json({ success: true, data: user });
});

exports.deleteUser = AsyncManager(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new LibraryError(`User not found`, 404));
    }
    await user.remove();
    return res.status(201).json({ success: true, data: {} });
});
