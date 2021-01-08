const express = require('express')
const router = express();
const topicControllers = require('../Controllers/TopicController');

router.post('/topic/create',topicControllers.create)
router.get('/topics', topicControllers.getAll)
router.delete('/topic/delete/:id', topicControllers.deleteOne)
router.delete('/topic/deleteMany', topicControllers.deleteMany)
module.exports = router;