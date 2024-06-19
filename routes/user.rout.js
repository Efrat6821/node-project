const express = require('express');
const userController = require('../controllers/user.controller');
const { checkAdminRole, authenticateToken } = require('../middleware/authenticate.middleware');


const router = express.Router();

router.get('/', authenticateToken, checkAdminRole, userController.Get);
router.post('/signIn', userController.signIn);
router.post('/signUp', userController.signUp);

module.exports = router;