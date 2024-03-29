import { IUserRepository } from "../domain/IUserRepository";
import { User } from "../domain/User";

export class CreateUser {
    constructor(private readonly repository: IUserRepository) {}

    async run(email: string, name: string): Promise<User> {   
        const user = new User(email, name);
        return await this.repository.create(user);
    }
}