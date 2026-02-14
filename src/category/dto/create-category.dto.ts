export class CreateCategoryDto {
    constructor(
        public name: string,
        public description: string | null,
    ){}
    static create( data: { [key: string]: any }  ): [string | undefined, CreateCategoryDto | undefined]  {
        const { name, description } = data
        if( !name ) return ["Name is required", undefined];

        return [undefined, new CreateCategoryDto(name, description)]
    }
}