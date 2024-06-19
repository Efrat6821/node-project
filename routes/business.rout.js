const express = require('express');
const businessController = require('../controllers/business.controller');
// const userController = require('../controllers/userController');
// const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', businessController.getBusinesses);
router.get('/:id', businessController.getBusiness);
router.post('/', businessController.addBusiness);
router.put('/:id', businessController.updateBusiness);


module.exports = router;
