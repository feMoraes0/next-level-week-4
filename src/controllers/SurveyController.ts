import { Request, Response } from "express";
import Survey from "../models/Survey";

export default class SurveyController {

  async index(request: Request, response: Response): Promise<Response> {
    const surveys = await Survey.find();

    return response.json(surveys);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const survey = Survey.create({
      title, description
    })

    const createdSurvey = await survey.save();

    return response.status(201).json(createdSurvey);
  }
}