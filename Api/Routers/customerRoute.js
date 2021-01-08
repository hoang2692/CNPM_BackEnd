const express = require('express')
const router = express();
const customerControllers = require('../Controllers/customerController');
const auth = require('../../middleware/authCustomer')
router.post('/customer/create',customerControllers.create)

router.post('/customer/login',customerControllers.login);

router.post('/customer/logout',auth,customerControllers.logout);

router.post('/customer/logoutall',auth,customerControllers.logoutall);

router.get('/customer/profile',auth,customerControllers.getOne);

router.delete('/delete/:id', customerControllers.deleteOne)

router.delete('/topic/deleteMany', customerControllers.deleteMany)

module.exports = router;