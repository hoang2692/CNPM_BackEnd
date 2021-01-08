let mongoose = require('mongoose')


const ResuiltSchema = new mongoose.Schema({
    timeLeft:{
        type: TimeRanges,
        required: true
    },
    resuiltDate:{
        type: Date,
        required: true
    },
    point:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    },
    customer:{
        type: mongoose.Schema.Types.String,
        ref: "Customer"
    },
    test:{
        type: mongoose.Schema.Types.String,
        ref: "Test"
    }
})

const Resuilt = mongoose.model('Resuilt',TopicSchema, 'Resuilts');

module.exports = Resuilt;