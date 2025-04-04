import { Response, Request, NextFunction } from 'express';
import { getAllUsers } from '../services/userService';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await getAllUsers();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        next(error);
    }
}