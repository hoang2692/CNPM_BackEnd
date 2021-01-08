let mongoose = require('mongoose')


const LevelSchema = new mongoose.Schema({
    levelName:{
        type: String,
        required: true
    },
    point:{
        type: String,
    },
    levelDescription:{
        type: String,
    },
    status:{
        type: Boolean,
        required: true
    },
    topics:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic"
    },
    tests:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Test"
    }],
    questions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    }],
})

const Level = mongoose.model('Level',LevelSchema, 'Levels');

module.exports = Level;7776