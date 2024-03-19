import clientsModel from '../../models/clients';
import EnumHttpStatus from '../../enums/httpCode';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

class ClientsControllers {
  static async createAClient(req, res) {
    const { name, email, address, telephone } = req.body;

    const newClient = await clientsModel.create({
      email,
      name,
      address,
      telephone,
      createdAt: dayjs().format('YYYY-MM-DD h:mm:ss A'),
      clientId: uuidv4(),
    });

    return res.status(EnumHttpStatus.CREATED).json(newClient);
  }

  static async getAClient(req, res) {
    const { id } = req.params;
    const client = await clientsModel.findOne({ clientId: id });
    if (!client)
      return res
        .status(EnumHttpStatus.NOT_FOUND)
        .json({ message: 'Client not found' });
    return res
      .status(EnumHttpStatus.OK)
      .json({ client, message: 'client successfully created' });
  }

  static async getAllClients(req, res) {
    const clients = await clientsModel.find();
    return res.status(EnumHttpStatus.OK).json(clients);
  }

  static async updateClient(req, res) {
    const { id } = req.params;
    const { email, name, address, telephone } = req.body;

    const updatedClient = await clientsModel.findOneAndUpdate(
      { clientId: id },
      {
        email,
        name,
        address,
        telephone,
        updatedAt: dayjs().format('YYYY-MM-DD h:mm:ss A'),
      },
      { new: true }
    );

    return res
      .status(EnumHttpStatus.OK)
      .json({ updatedClient, message: 'client successfully updated' });
  }

  static async deleteClient(req, res) {
    const { id } = req.params;

    const deleted = await clientsModel.findOneAndDelete({ clientId: id });
    if (deleted === null) {
      return res
        .status(EnumHttpStatus.NOT_FOUND)
        .json({ message: 'Client does not exist' });
    } else {
      return res.status(EnumHttpStatus.NO_CONTENT).json({ message: 'Client deleted' });
    }
  }
}

export default ClientsControllers;
