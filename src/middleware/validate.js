import { celebrate, Joi, Segments } from 'celebrate';
console.log('got here==============>')

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
      username: Joi.string().required(),
      password: Joi.string().min(8).required(),
    }),
  });
}

