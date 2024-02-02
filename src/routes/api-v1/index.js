import { Router } from 'express';
import questionsRoute from '../../features/questions/questions.route'


const routes = Router();

routes.use('/questions', questionsRoute);

export default routes;