import { UserRepository } from '../repositories/userRepository';

export const  getAllUsers = async () => {
    return await UserRepository.findAll();
}