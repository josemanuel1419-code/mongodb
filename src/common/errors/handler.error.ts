import { Response } from "express";
import { ManagerError } from "./manager.error";

export class HandlerError{
    static error( res: Response, error: unknown ){
        if( error instanceof ManagerError ){
            res.status( error.statusCode ).json({ message: error.message, statusMsg: error.statusMsg, statusCode: error.statusCode });
            return;
        }

        res.status( 500 ).json({ message: "Internal Server Error", statusMsg: "INTERNAL_SERVER_ERROR", statusCode: 500 });
    }
}