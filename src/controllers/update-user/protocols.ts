import { User } from "../../models/user";

export interface UpdateUSerParams {
  firstName?: string;
  lastName?: string;
  password?: string;
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: UpdateUSerParams): Promise<User>;
}
