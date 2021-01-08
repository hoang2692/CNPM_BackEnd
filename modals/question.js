let mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    answer1:{
        type: String,
        required: true
    },
    answer2:{
        type: String,
        required: true
    },
    answer3:{
        type: String,
        required: true
    },
    answer4:{
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    },
    createDate:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    },
    tests:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Test"
    }],
    levels:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Level"
    }
})

const Question = mongoose.model('Question',QuestionSchema, 'Questions');

module.exports = Question