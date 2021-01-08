let mongoose = require('mongoose')


const TestSchema = new mongoose.Schema({
    testName:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    },
    point:{
        type: String,
        required: true
    },
    levels:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Level"
    },
    questions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    }],
    resuilts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resuilt"
    }]
})

const Test = mongoose.model('Test',TestSchema, 'Tests');

module.exports = Test;