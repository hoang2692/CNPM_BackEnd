const Level = require('../../modals/level');
const Topic = require('../../modals/topic');

try{
    const LevelControler = {
        getAll: async (req,res) =>{
            const levels = await Level.find().populate('questions').populate('tests')
            res.json({levels})
        },
        create: async (req,res) =>{
            const idTopic = req.params.id;
            const level = new Level(req.body)
            const topic = await Topic.findById({_id: idTopic});
            level.topics = topic;
            await level.save()
            topic.levels.push(level)
            await topic.save()
            res.status(200).send({level})
        },
        deleteOne: async(req,res) =>{
            const data = await Level.findByIdAndDelete({_id: req.params.id})
            res.status(200).send({data})
        },
        deleteMany: async(req,res) =>{
            const listLevel = req.body.list
            const levelDeleted = []
            for (var i = 0; i < listLevel.length; i++)
            {
                const data = await Level.findByIdAndDelete({_id: listLevel[i]})
                levelDeleted.push(data)
            }
            res.status(200).send(levelDeleted)
        }
    }
    module.exports = LevelControler;
}
catch (error){
    res.status(400).send(error)
}