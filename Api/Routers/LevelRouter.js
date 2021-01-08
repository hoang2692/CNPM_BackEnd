const express = require('express')
const router = express();
const levelControllers = require('../Controllers/LevelController');

router.post('/level/create/:id',levelControllers.create)
router.get('/level', levelControllers.getAll)

router.delete('/level/delete/:id', levelControllers.deleteOne)

router.delete('/level/deleteMany', levelControllers.deleteMany)


module.exports = router;