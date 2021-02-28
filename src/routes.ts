import { Router } from 'express';
import SurveyController from './controllers/SurveyController';
import UserController from './controllers/UserController';

const routes = Router();

const userController = new UserController();
const surveyController = new SurveyController();

routes.post('/user', userController.create);

routes.get('/surveys', surveyController.index);
routes.post('/survey', surveyController.create);

export default routes;