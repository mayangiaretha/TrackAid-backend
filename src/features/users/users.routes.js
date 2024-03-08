import { Router } from 'express';
import usersControllers from './users.controllers';
import asyncMiddleware from '../../middleware/async.middleware';
import validate from '../../middleware/validate';
import verifiedToken from '../../middleware/auth';

const router = Router();

router.post(
  '/register',
  validate.authRegister,
  asyncMiddleware(usersControllers.registerAUser)
);
router.post(
  '/login',
  verifiedToken,
  validate.login,
  asyncMiddleware(usersControllers.loginUser)
);

export default router;
