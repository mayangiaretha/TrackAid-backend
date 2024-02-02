
import{ Router } from 'express'
import questionsControllers from "./questions.controllers";


const router = Router();

router.get('/',questionsControllers.getQuestions);


export default router;