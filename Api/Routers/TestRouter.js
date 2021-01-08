const express = require('express')
const router = express();
const testControllers = require('../Controllers/Testontroller');

router.post('/test/create/:id',testControllers.create)
router.get('/tests', testControllers.getAll)
router.post('/test/addQuestion/:idTest', testControllers.addQuestion)
router.delete('/test/delete/:id', testControllers.deleteOne)
router.delete('/test/deleteMany', testControllers.deleteMany)
module.exports = router;