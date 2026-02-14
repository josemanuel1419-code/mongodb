export class UpdateProductDto {
    constructor(
        public readonly id: string,
        public readonly name?: string,
        public readonly description?: string,
        public readonly category?: string
    ){}

    static update( data: {[key:string]: any} ): [string | undefined, UpdateProductDto | undefined] {
        const { id, name, description, category } = data;

        if ( !id ) return ['Id must be a valid string', undefined];
                
        return [undefined, new UpdateProductDto(id, name, description, category)];
    }
}

