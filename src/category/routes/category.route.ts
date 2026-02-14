import { Request, Response, Router } from "express";
import { CategoryService } from "../services/category.service";
import { CategoryController } from "../controllers/category.cotroller";

export class CategoryRoute{
    static get route(): Router{
        const router = Router();
        const categoryService = new CategoryService();
        const categoryController = new CategoryController(categoryService);

        // Routes
        router.post('/', categoryController.create);
        router.get('/', categoryController.findAll);

        router.get('/:id', categoryController.findOne);
        router.put('/:id', categoryController.update);
        router.delete('/:id', categoryController.delete);
        
        return router;
    }
}
