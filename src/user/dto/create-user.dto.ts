export class CreateUserDto {
    constructor(
        public name: string,
        public email: string,
        public password: string,
    ){}
    static validate( data: { [key: string]: any }  ): [string | undefined, CreateUserDto | undefined]  {
        const { name, email, password } = data
        if( !name ) return ["Name is required", undefined];
        if( !email ) return ["Email is required", undefined];
        if( !password ) return ["Password is required", undefined];

        return [undefined, new CreateUserDto(name, email, password)]
    }
}