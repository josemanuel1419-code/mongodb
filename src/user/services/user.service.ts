import { UserModel } from "../../common/databases/mongodb/models/user.model"
import { ManagerError } from "../../common/errors/manager.error";
import { CreateUserDto } from "../dto/create-user.dto";

export class UserService{
    async create(createUserDto: CreateUserDto){
        try {
            const user = await UserModel.create(createUserDto);
            await user.save();
        } catch (error) {
            throw error
        }
    }

    async findAll(){
        try {
            const user = await UserModel.find();
            return user
        } catch (error) {
            throw error
        }
    }

    async findOne( id: string ){
        try {
            const user = await UserModel.findById(id)
            if(!user) throw ManagerError.notFound("User not found");
            
            return user
        } catch (error) {
            throw error
        }
    }
}