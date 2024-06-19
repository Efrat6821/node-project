const express = require('express');
const userController = require('../controllers/user.controller');


const router = express.Router();

router.get('/', userController.Get);
router.post('/signIn', userController.signIn);
router.post('/signUp', userController.signUp);

module.exports = router;