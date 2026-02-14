import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
    },
    description: {
        type: String,
    },
}, { timestamps: true });

export const CategoryModel = mongoose.model("Category", categorySchema);