import { Request, Response } from 'express';
import User from '../models/User';

export default class UserController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const userAlreadyExists = await User.findOne({ email });

    if(userAlreadyExists) {
      return response.status(400).json({
        message: "User already exists"
      });
    }

    const user = User.create({ name, email });

    const saved = await user.save();

    return response.status(201).json(saved);
  }

}