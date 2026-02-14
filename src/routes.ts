import { Request, Response, Router } from "express";
import { UserRoute } from "./user/routes/user.route";
import { CategoryRoute } from "./category/routes/category.route";
import { ProductRoute } from "./products/routes/product.route";

export class FactoryRoute{
    static get route(): Router{
        const router = Router();
        // Routes
        router.use('/users', UserRoute.route);
        router.use('/categories', CategoryRoute.route);
        router.use('/products', ProductRoute.route)
        
        return router;
    }
}