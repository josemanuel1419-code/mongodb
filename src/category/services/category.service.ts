import { CategoryModel } from "../../common/databases/mongodb/models/category.model";
import { ManagerError } from "../../common/errors/manager.error";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";

export class CategoryService {
    async create(createCategoryDto: CreateCategoryDto) {
        try {
            const category = await CategoryModel.create({
                name: createCategoryDto.name,
                description: createCategoryDto.description,
            })
            await category.save();

            return category;
        } catch (error) {
            throw error
        }
    }

    async findAll() {
        try {
            const category = await CategoryModel.find();
            return category
        } catch (error) {
            throw error
        }
    }

    async findOne(id: string) {
        try {
            const category = await CategoryModel.findById(id)
            if (!category) throw ManagerError.notFound("category not found");

            return category
        } catch (error) {
            throw error
        }
    }
    async update(updateCategoryDto: UpdateCategoryDto) {
        try {
            const category = await CategoryModel.findByIdAndUpdate(
                updateCategoryDto.id, 
                { ...updateCategoryDto }, 
                { new: true }
            );

            if (!category) throw ManagerError.notFound("Category not found to update");
            return category;
        } catch (error) {
            throw error;
        }
    }

    async delete(id: string) {
        try {
            const category = await CategoryModel.findByIdAndDelete(id);
            if (!category) throw ManagerError.notFound("Category not found to delete");
            
            return { deleted: true };
        } catch (error) {
            throw error;
        }
    }
}
