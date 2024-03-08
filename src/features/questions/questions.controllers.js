//
// import {db} from '../../db/db'
// import EnumHttpStatus from "../../enums/httpCode";
// import { v4 as uuidv4 } from 'uuid'
//
// const{questions}= db
//
// class QuestionsControllers{
//
//     static async getQuestions(req, res){
//
//         if (questions.length< 1){
//             return res
//                 .status(EnumHttpStatus.BAD_REQUEST)
//                 .json({message:'No questions found'})
//         }
//         return res.status(EnumHttpStatus.OK).json(questions)
//     }
//
//     static async getAQuestion(req, res){
//
//         const {id} = req.params
//         const foundQuestion = await questions.find((question) => question.id === id);
//         if(!foundQuestion){
//             return res
//                 .status(EnumHttpStatus.BAD_REQUEST)
//                 .json({message:'question with this id doesnt exist'})
//         }
//         return res.status(EnumHttpStatus.OK).json(foundQuestion)
//     }
//     static async postAQuestion(req, res){
//         const {title, description} = req.body;
//         const postedQuestion = {
//             id: uuidv4(),
//             title,
//             description
//         }
//         questions.push(postedQuestion);
//         return res.status(EnumHttpStatus.OK).json(questions)
//
//     }
//
// }
//
//
//
// export default QuestionsControllers
