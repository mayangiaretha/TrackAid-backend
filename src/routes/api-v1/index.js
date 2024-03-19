import { Router } from 'express';
import usersRoute from '../../features/users/users.routes';
import clientsRoute from "../../features/clients/clients.route";

const routes = Router();

routes.use('/users', usersRoute);
routes.use('/clients', clientsRoute);

export default routes;
