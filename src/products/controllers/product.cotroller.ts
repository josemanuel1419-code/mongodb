import { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import { HandlerError } from "../../common/errors/handler.error";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";

export class ProductController{
    constructor(
        private readonly productService: ProductService
    ){}

    create = ( req: Request, res: Response )=>{
        const [error, createProductDto] = CreateProductDto.create(req.body);
        if( error ){
            res.status(400).json({error})
            return;
        }

        this.productService.create(createProductDto!)
        .then( product => res.json({ product }) )
        .catch( error => HandlerError.error(res, error))
    }

    findOne = ( req: Request, res: Response )=>{
        this.productService.findOne( req.params.id as string )
        .then( product => res.json({ product }) )
        .catch( error => HandlerError.error(res, error) )
    }

    findAll = ( req: Request, res: Response )=>{
        this.productService.findAll()
        .then( products => res.json({ products }) )
        .catch( error => HandlerError.error(res, error) )
    }
    update = (req: Request, res: Response) => {
        const id = req.params.id;
        const [error, updateProductDto] = UpdateProductDto.update({ ...req.body, id });
        
        if (error) return res.status(400).json({ error });

        this.productService.update(updateProductDto!)
            .then(product => res.json({ product }))
            .catch(error => HandlerError.error(res, error));
    }

    delete = (req: Request, res: Response) => {
        this.productService.delete(req.params.id as string)
            .then(product => res.json(product))
            .catch(error => HandlerError.error(res, error));
    }
}
