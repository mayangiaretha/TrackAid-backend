import{ Router } from 'express'
import usersControllers from "./users.controllers";
import asyncMiddleware from "../../middleware/async.middleware";


const router = Router();

router.post('/register', asyncMiddleware(usersControllers.registerAUser))
router.post('/login', asyncMiddleware(usersControllers.loginUser))

export default router;