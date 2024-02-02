
import {questions} from "../../db/db";
import EnumHttpStatus from "../../enums/httpCode";

class QuestionsControllers{
    static async getQuestions(req, res){
        if (questions.length< 1){
            return res
                .status(EnumHttpStatus.BAD_REQUEST)
                .json({message:'No questions found'})
        }
        return res.status(EnumHttpStatus.OK).json(questions)
    }

}



export default QuestionsControllers