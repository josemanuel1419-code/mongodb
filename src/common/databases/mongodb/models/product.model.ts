import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
    },
    description: {
        type: String,
    },
    category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    require: [true, "category is required"]
        }
    }, 
    { timestamps: true });

export const ProductModel = mongoose.model("product", ProductSchema);