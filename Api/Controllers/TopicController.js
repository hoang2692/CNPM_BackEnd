const Topic = require('../../modals/topic')

try{
    const TopicControler = {
        getAll: async(req,res) =>{
            const topics = await Topic.find()
            res.json({topics})
        },
        create: async (req,res) =>{
            const topic = new Topic(req.body)
            await topic.save()
            res.status(201).send({topic})
        },
        deleteOne: async(req,res) =>{
            const data = await Topic.findByIdAndDelete({_id: req.params.id})
            res.status(200).send({data})
        },
        deleteMany: async(req,res) =>{
            const listTopic = req.body.list
            const topicDeleted = []
            for (var i = 0; i < listTopic.length; i++)
            {
                const data = await Topic.findByIdAndDelete({_id: listTopic[i]})
                topicDeleted.push(data)
            }
            res.status(200).send(topicDeleted)
        }
    }
    module.exports = TopicControler;
}
catch (error){
    res.status(400).send(error)
}