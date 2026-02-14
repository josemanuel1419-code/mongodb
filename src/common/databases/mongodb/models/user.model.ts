import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
    },
    email: {
        type: String,
        require: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "Password is required"],
    },
    roles: {
        type: [String],
        default: ["user"],
        enum: ["user", "admin"],
    },

}, { timestamps: true });

export const UserModel = mongoose.model("User", userSchema);