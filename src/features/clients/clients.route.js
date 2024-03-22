import { Router } from 'express';
import clientsControllers from './clients.controllers';
import asyncMiddleware from '../../middleware/async.middleware';
import validate from '../../middleware/validate';

const router = Router();

router.post(
  '/',
  validate.client,
  asyncMiddleware(clientsControllers.createAClient)
);
router.get('/:id', asyncMiddleware(clientsControllers.getAClient));
router.get('/', asyncMiddleware(clientsControllers.getAllClients));
router.put(
  '/:id',
  validate.client,
  asyncMiddleware(clientsControllers.updateClient)
);
router.delete('/:id', asyncMiddleware(clientsControllers.deleteClient));

export default router;
