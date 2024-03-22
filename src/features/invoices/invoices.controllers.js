import EnumHttpStatus from '../../enums/httpCode';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import invoicesModel from '../../models/invoices';
import clientsModel from '../../models/clients';

class InvoicesControllers {
  static async createAnInvoice(req, res) {
    const { name, email, telephone, address, items, amount, dueDate } =
      req.body;

    const existingClient = await clientsModel.findOne({ name, email });


    if (!existingClient) {
      await clientsModel.create({
        name,
        email,
        telephone,
        address,
        createdAt: dayjs().format('YYYY-MM-DD h:mm:ss A'),
        clientId: uuidv4(),
      });
    }
    const status = 'pending';

    const newInvoice = await invoicesModel.create({
      clientId: existingClient ? existingClient._id : undefined,
      ...req.body,
      items,
      amount,
      dueDate,
      invoiceId: uuidv4(),
      createdAt: dayjs().format('YYYY-MM-DD h:mm:ss A'),
    });

    // Return the new invoice
    return res.status(EnumHttpStatus.CREATED).json(newInvoice);

    return res
      .status(EnumHttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
}

export default InvoicesControllers;
