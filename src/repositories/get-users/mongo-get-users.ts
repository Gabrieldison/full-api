import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "gabriel",
        lastName: "dison",
        email: "gabriel@gmail.com",
        password: "123456789",
      },
    ];
  }
}
