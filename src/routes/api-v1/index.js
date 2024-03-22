import { Router } from 'express';
import usersRoute from '../../features/users/users.routes';
import clientsRoute from '../../features/clients/clients.route';
import invoicesRoute from "../../features/invoices/invoices.route";

const routes = Router();

routes.use('/users', usersRoute);
routes.use('/clients', clientsRoute);
routes.use('/invoices', invoicesRoute);

export default routes;
