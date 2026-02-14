import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";
import { HandlerError } from "../../common/errors/handler.error";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";

export class CategoryController{
    constructor(
        private readonly categoryService: CategoryService
    ){}

    create = ( req: Request, res: Response )=>{
        const [error, createCategoryDto] = CreateCategoryDto.create(req.body);
        if( error ){
            res.status(400).json({error})
            return;
        }

        this.categoryService.create(createCategoryDto!)
        .then( category => res.json({ category }) )
        .catch( error => HandlerError.error(res, error))
    }

    findOne = ( req: Request, res: Response )=>{
        this.categoryService.findOne( req.params.id as string )
        .then( category => res.json({ category }) )
        .catch( error => HandlerError.error(res, error) )
    }

    findAll = ( req: Request, res: Response )=>{
        this.categoryService.findAll()
        .then( categories => res.json({ categories }) )
        .catch( error => HandlerError.error(res, error) )
    }
    update = (req: Request, res: Response) => {
        const id = req.params.id;
        const [error, updateCategoryDto] = UpdateCategoryDto.update({ ...req.body, id });
        
        if (error) return res.status(400).json({ error });

        this.categoryService.update(updateCategoryDto!)
            .then(category => res.json({ category }))
            .catch(error => HandlerError.error(res, error));
    }

    delete = (req: Request, res: Response) => {
        this.categoryService.delete(req.params.id as string)
            .then(result => res.json(result))
            .catch(error => HandlerError.error(res, error));
    }
}
