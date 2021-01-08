const express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true }).then(db => console.log("Connect Success"))

const newapp = express();
const port =process.env.PORT || 5000;
var CustomerRoute = require('./Api/Routers/customerRoute')
const ManagerRoute = require('./Api/Routers/managerRoute')
const TopicRoute = require('./Api/Routers/TopicRouter')
const LevelRoute = require('./Api/Routers/LevelRouter')
const QuestionRoute = require('./Api/Routers/QuestionRoute')
const TestRoute = require('./Api/Routers/TestRouter')
newapp.use(bodyParser.json());
newapp.use(bodyParser.urlencoded({ extended: true }));
newapp.use(express.static('public'));
newapp.use('/', CustomerRoute)
newapp.use('/', ManagerRoute)
newapp.use('/', TopicRoute)
newapp.use('/', LevelRoute)
newapp.use('/', QuestionRoute)
newapp.use('/', TestRoute)
newapp.listen(port, () =>console.log("Running at " + port))