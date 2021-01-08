const express = require('express')
const router = express();
const auth = require('../../middleware/authCustomer')
const questionControllers = require('../Controllers/QuestionController');

router.post('/question/create/:id',questionControllers.create)
router.get('/questions',auth,questionControllers.getAll)
router.delete('/question/delete/:id', questionControllers.deleteOne)
router.delete('/question/deleteMany', questionControllers.deleteMany)
module.exports = router;