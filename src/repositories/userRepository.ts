import { User } from "../models/userModel";

export class UserRepository {
  static async findAll() {
    return await User.find();
  }
}