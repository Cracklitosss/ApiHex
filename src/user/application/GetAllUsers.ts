import { IUserRepository } from "../interfaces/ports/IUserRepository";
import { User } from "../domain/User";

export class GetAllUsers {
    constructor(private readonly repository: IUserRepository) {}

    async run(): Promise<User[]> {
        return await this.repository.getAll();
    }
}
