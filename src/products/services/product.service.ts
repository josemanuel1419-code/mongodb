import { ProductModel } from "../../common/databases/mongodb/models/product.model";
import { ManagerError } from "../../common/errors/manager.error";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";

export class ProductService {
    async create(createProductDto: CreateProductDto) {
        try {
            const Product = await ProductModel.create({
                name: createProductDto.name,
                description: createProductDto.description,
            })
            await Product.save();

            return Product;
        } catch (error) {
            throw error
        }
    }

    async findAll() {
        try {
            const products = await ProductModel.find().populate('category'); 
            return products;
        } catch (error) {
            throw error
        }
    }

    async findOne(id: string) {
        try {
            const product = await ProductModel.findById(id).populate('category');
            if (!product) throw ManagerError.notFound("Product not found");
            return product;
        } catch (error) {
            throw error
        }
    }
    async update(updateProductDto: UpdateProductDto) {
        try {
            const Product = await ProductModel.findByIdAndUpdate(
                updateProductDto.id, 
                { ...updateProductDto }, 
                { new: true }
            );

            if (!Product) throw ManagerError.notFound("Product not found to update");
            return Product;
        } catch (error) {
            throw error;
        }
    }

    async delete(id: string) {
        try {
            const Product = await ProductModel.findByIdAndDelete(id);
            if (!Product) throw ManagerError.notFound("Product not found to delete");
            
            return { deleted: true };
        } catch (error) {
            throw error;
        }
    }
}
