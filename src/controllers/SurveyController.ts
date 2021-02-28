import { Request, Response } from "express";
import Survey from "../models/Survey";



export default class SurveyController {

  async create(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const survey = Survey.create({
      title, description
    })

    const createdSurvey = await survey.save();

    return response.status(201).json(createdSurvey);
  }
}