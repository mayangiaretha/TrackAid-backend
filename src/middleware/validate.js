import { celebrate, Joi, Segments } from 'celebrate';

export default class validate {
  static authRegister = celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().min(3).max(35).required(),
      email: Joi.string().min(6).max(255).required().email(),
      password: Joi.string().min(8).max(120).required(),
    }),
  });
  static login = celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().min(6).max(255).required().email(),
      password: Joi.string().min(8).required(),
    }),
  });

  static client = celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(3).max(35).required(),
      email: Joi.string().min(6).max(255).required().email(),
      address: Joi.string().min(3).max(35).required(),
      telephone: Joi.string().min(3).max(35).required(),
    }),
  });

  static invoiceSchema = celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(3).max(35).required(),
      email: Joi.string().min(6).max(255).required().email(),
      address: Joi.string().min(3).max(35).required(),
      telephone: Joi.string().min(3).max(35).required(),
      items: Joi.array()
        .items(
          Joi.object({
            productName: Joi.string().min(1).max(255).required(),
            quantity: Joi.number().integer().min(1).required(),
            price: Joi.number().min(0).required(),
          })
        )
        .required(),
      amount: Joi.number().min(0).required(),
      dueDate: Joi.date().iso().required(),
      status: Joi.string().valid('pending', 'paid', 'unpaid').required(),
    }),
  });
}
