import { Request, Response, Router } from "express";
import { UserController } from "../controllers/user.cotroller";
import { UserService } from "../services/user.service";

export class UserRoute{
    static get route(): Router{
        const router = Router();
        const userService = new UserService();
        const userController = new UserController(userService);

        // Routes
        router.post('/', userController.create);
        router.get('/', userController.findAll);

        router.get('/:id', userController.findOne);
        
        return router;
    }
}