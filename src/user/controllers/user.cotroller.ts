import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { HandlerError } from "../../common/errors/handler.error";

export class UserController{
    constructor(
        private readonly userService: UserService
    ){}

    create = ( req: Request, res: Response )=>{
        const [error, createUserDto] = CreateUserDto.validate(req.body);
        if( error ){
            res.status(400).json({error})
            return;
        }

        this.userService.create(createUserDto!)
        .then( user => res.json({ user }) )
        .catch( error => HandlerError.error(res, error))
    }

    findOne = ( req: Request, res: Response )=>{
        this.userService.findOne( req.params.id as string )
        .then( user => res.json({ user }) )
        .catch( error => HandlerError.error(res, error) )
    }

    findAll = ( req: Request, res: Response )=>{
        this.userService.findAll()
        .then( users => res.json({ users }) )
        .catch( error => HandlerError.error(res, error) )
    }
}