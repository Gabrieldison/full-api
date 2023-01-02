import { User } from "../../models/user";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IUpdateUserRepository, UpdateUSerParams } from "./protocols";

export class UpdateUserController implements IController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}
  async handle(
    httpRequest: HttpRequest<UpdateUSerParams>
  ): Promise<HttpResponse<User>> {
    try {
      const id = httpRequest?.params?.id;

      const body = httpRequest?.body;

      if (!body) {
        return {
          statusCode: 400,
          body: "missing fields",
        };
      }

      if (!id) {
        return {
          statusCode: 400,
          body: "Missing user id",
        };
      }

      const allowedFieldsToUpdate: (keyof UpdateUSerParams)[] = [
        "firstName",
        "lastName",
        "password",
      ];

      const someFieldsIsNotAllowedToUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof UpdateUSerParams)
      );

      if (someFieldsIsNotAllowedToUpdate) {
        return {
          statusCode: 400,
          body: "some received field is not allowed",
        };
      }

      const user = await this.updateUserRepository.updateUser(id, body);

      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "something went wrong",
      };
    }
  }
}
