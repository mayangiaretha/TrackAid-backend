import { Router } from 'express';
// import questionsRoute from '../../features/questions/questions.route'
import usersRoute from '../../features/users/users.routes'

const routes = Router();

routes.use('/users', usersRoute);
// routes.use('/questions', questionsRoute);

export default routes;