import { Request, Response } from 'express';

export class UserController {

  public async create(request: Request, response: Response): Promise<Response> {

    return response.json({});
  }

}