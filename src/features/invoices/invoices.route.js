import { Router } from 'express';
import InvoicesControllers from './invoices.controllers';
import asyncMiddleware from '../../middleware/async.middleware';
import validate from '../../middleware/validate';
import invoicesControllers from './invoices.controllers';

const router = Router();

router.post('/',   validate.invoiceSchema, asyncMiddleware(InvoicesControllers.createAnInvoice));
router.get('/:id', asyncMiddleware(InvoicesControllers.getAnInvoice));
router.get('/', asyncMiddleware(invoicesControllers.getAllInvoices));
router.put(
  '/:id',
  validate.invoiceSchema,
  asyncMiddleware(InvoicesControllers.updateInvoice)
);

export default router;
