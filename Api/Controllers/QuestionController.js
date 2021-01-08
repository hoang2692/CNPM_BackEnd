const Level = require('../../modals/level')
const Question = require('../../modals/question')

try{
    const QuestionControler = {
        getAll: async(req,res) => {
            const questions = await Question.find()
            res.json({questions})
        },
        create: async (req,res) =>{
            const question = new Question(req.body)
            const idLevel = req.params.id
            const level = await Level.findById({_id: idLevel})
            question.levels = level
            await question.save()
            level.questions.push(question)
            await level.save()
            res.status(201).send({question})
        },
        deleteOne: async(req,res) =>{
            const data = await Question.findByIdAndDelete({_id: req.params.id})
            res.status(200).send({data})
        },
        deleteMany: async(req,res) =>{
            const listQuestion = req.body.list
            const questionDeleted = []
            for (var i = 0; i < listQuestion.length; i++)
            {
                const data = await Question.findByIdAndDelete({_id: listQuestion[i]})
                questionDeleted.push(data)
            }
            res.status(200).send(questionDeleted)
        }
    }
    module.exports = QuestionControler;
}
catch (error){
    res.status(400).send(error)
}