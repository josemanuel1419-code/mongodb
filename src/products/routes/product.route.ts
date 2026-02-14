import { Router } from "express";
import { ProductService } from "../services/product.service";
import { ProductController } from "../controllers/product.cotroller";

export class ProductRoute{
    static get route(): Router{
        const router = Router();
        const productService = new ProductService();
        const productController = new ProductController(productService);

        // Routes
        router.post('/', productController.create);
        router.get('/', productController.findAll);

        router.get('/:id', productController.findOne);
        router.put('/:id', productController.update);
        router.delete('/:id', productController.delete);
        
        return router;
    }
}
