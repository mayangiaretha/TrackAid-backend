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
      address: Joi.string().min(3).max(35),
      telephone: Joi.string().min(3).max(35),
      bankName: Joi.string().min(3).max(35),
      invoiceNo: Joi.number().integer().min(1).required(),
      accountNo: Joi.number().integer().min(1),
      items: Joi.array()
        .items(
          Joi.object({
            product: Joi.string().min(1).max(255).required(),
            quantity: Joi.number().integer().min(1).required(),
            unitPrice: Joi.number().min(0).required(),
            description: Joi.string().min(1).max(255).required(),
            total: Joi.number().min(0).required(),
          })
        )
        .required(),
      total: Joi.number().min(0).required(),
      tax: Joi.number().min(0).required(),
      subtotal: Joi.number().min(0).required(),
      swiftCode: Joi.string().min(3).max(15).required(),
      dueDate: Joi.date().iso().required(),
      status: Joi.string().valid('pending', 'paid'),
    }),
  });
}
