const mongoose = require("mongoose");
// const slugify = require("slugify");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Pleases insert username"],
            unique: true,
        },
        address: {
            type: String,
            trim: true,
            maxlength: [50, "Maksimal 50 huruf"],
        },
    },
    {
        timestamps: true,
    }
);

UserSchema.pre("save", (next) => {
    next();
});

module.exports = mongoose.model("User", UserSchema);
