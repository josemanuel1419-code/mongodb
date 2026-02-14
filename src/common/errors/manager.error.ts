import { HttpStatus } from "./http-status";

export class ManagerError extends Error {

    constructor( public statusCode: number, public statusMsg: keyof typeof HttpStatus, public message: string ){
        super();
    }

    static badRequest( message: string ) {
        return new ManagerError( 400, "BAD_REQUEST", message );
    }
    static unauthorized( message: string ) {
        return new ManagerError( 401, "UNAUTHORIZED", message );
    }

    static forbidden( message: string ) {
        return new ManagerError( 403, "FORBIDDEN", message );
    }

    static notFound( message: string ) {
        return new ManagerError( 404, "NOT_FOUND", message );
    }

    static conflict( message: string ) {
        return new ManagerError( 409, "CONFLICT", message );
    }

    static unprocessableEntity( message: string ) {
        return new ManagerError( 422, "UNPROCESSABLE_ENTITY", message );
    }
}