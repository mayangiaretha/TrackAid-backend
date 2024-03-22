import { Router } from 'express';
import InvoicesControllers from './invoices.controllers';
import asyncMiddleware from '../../middleware/async.middleware';


const router = Router();

router.post('/', asyncMiddleware(InvoicesControllers.createAnInvoice));
router.get('/:id', asyncMiddleware(InvoicesControllers.getAnInvoice));
// router.get('/', asyncMiddleware(clientsControllers.getAllClients));
// router.put(
//   '/:id',
//   validate.client,
//   asyncMiddleware(clientsControllers.updateClient)
// );
// router.delete('/:id', asyncMiddleware(clientsControllers.deleteClient));

export default router;
