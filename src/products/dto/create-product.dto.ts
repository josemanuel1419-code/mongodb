export class CreateProductDto {
    constructor(
        public name: string,
        public description: string | null,
        public category: string
    ){}
    static create( data: { [key: string]: any }  ): [string | undefined, CreateProductDto | undefined]  {
        const { name, description, category } = data
        if( !name ) return ["Name is required", undefined];
        if( !category ) return ["Name is required", undefined];

        return [undefined, new CreateProductDto(name, description, category)]
    }
}