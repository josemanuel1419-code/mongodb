export class UpdateCategoryDto {
    constructor(
        public readonly id: string,
        public readonly name?: string,
        public readonly description?: string,
    ){}

    static update( data: {[key:string]: any} ): [string | undefined, UpdateCategoryDto | undefined] {
        const { id, name, description } = data;

        if ( !id ) return ['Id must be a valid string', undefined];
        
        return [undefined, new UpdateCategoryDto(id, name, description)];
    }
}

