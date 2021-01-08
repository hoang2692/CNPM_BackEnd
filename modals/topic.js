let mongoose = require('mongoose')


const TopicSchema = new mongoose.Schema({
    TopicName:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    },
    levels:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Level"
    }]
})

const Topic = mongoose.model('Topic',TopicSchema, 'Topics');

module.exports = Topic;