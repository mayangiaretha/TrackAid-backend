import { Router } from 'express';
import clientsControllers from "./clients.controllers";
import asyncMiddleware from "../../middleware/async.middleware";

const router = Router();

router.post('/', asyncMiddleware(clientsControllers.createAClient));
router.get('/:id', asyncMiddleware(clientsControllers.getAClient));
router.get('/', asyncMiddleware(clientsControllers.getAllClients));

export default router;

