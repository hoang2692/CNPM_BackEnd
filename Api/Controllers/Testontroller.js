const Test = require('../../modals/test')
const Level = require('../../modals/level')
const Question = require('../../modals/question')

try{
    const TestControler = {
        getAll: async (req,res) =>{
            const tests = await Test.find().populate('questions')
            res.json({tests})
        },
        create: async (req,res) =>{
            const idLevel = req.params.id;
            const test = new Test(req.body.data)
            const level = await Level.findById({_id: idLevel});
            test.levels = level;
            await test.save()
            level.tests.push(test)
            await level.save()
            res.status(200).send({test})
        },
        addQuestion: async (req,res) =>{
            var i = 0;
            const listQuestion = req.body.questions.idQuestion
            const idTest = req.params.idTest;
            const test = await Test.findById({_id: idTest})
            for(i; i < listQuestion.length; i++)
            {
                const question = await Question.findById({_id: listQuestion[i]});
                question.tests.push(test)
                await question.save()
                test.questions.push(question)
                await test.save()
            }
            res.send(listQuestion)
        },
        deleteOne: async(req,res) =>{
            const data = await Test.findByIdAndDelete({_id: req.params.id})
            res.status(200).send({data})
        },
        deleteMany: async(req,res) =>{
            const listTest = req.body.list
            const testDeleted = []
            for (var i = 0; i < listTest.length; i++)
            {
                const data = await Test.findByIdAndDelete({_id: listTest[i]})
                testDeleted.push(data)
            }
            res.status(200).send(testDeleted)
        }
    }
    module.exports = TestControler;
}
catch (error){
    res.status(400).send(error)
}