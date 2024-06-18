const express = require('express');
const businessController = require('../controllers/business.controller');
// const userController = require('../controllers/userController');
// const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// router.get('/business');
router.post('/', businessController.addBusiness);
// router.put('/business');


module.exports = router;
