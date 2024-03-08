import{ Router } from 'express'
import usersControllers from "./users.controllers";
import asyncMiddleware from "../../middleware/async.middleware";
import validate from "../../middleware/validate";


const router = Router();

router.post('/register',validate.authRegister, asyncMiddleware(usersControllers.registerAUser))
router.post('/login',validate.login,asyncMiddleware(usersControllers.loginUser))

export default router;