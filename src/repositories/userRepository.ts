import { User } from "../model/userModel";

export class UserRepository {
  static async findAll() {
    return await User.find();
  }
}