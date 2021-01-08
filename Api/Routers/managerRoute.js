const express = require('express')
const router = express();
const managerControllers = require('../Controllers/managerController');
const auth = require('../../middleware/authCustomer')
router.post('/manager/create',managerControllers.create)

router.post('/manager/login',managerControllers.login);

router.post('/manager/logout',auth,managerControllers.logout);

router.post('/manager/logoutall',auth,managerControllers.logoutall);

router.get('/manager/profile',auth,managerControllers.getOne);

router.delete('/manager/delete/:id', managerControllers.deleteOne)

router.delete('/manager/deleteMany', managerControllers.deleteMany)

module.exports = router;