const express = require('express');
const businessController = require('../controllers/business.controller');
const { checkAdminRole, authenticateToken } = require('../middleware/authenticate.middleware');

const router = express.Router();

router.get('/', authenticateToken, checkAdminRole, businessController.getBusinesses);
router.get('/:id', authenticateToken, checkAdminRole, businessController.getBusiness);
router.post('/', authenticateToken, checkAdminRole, businessController.addBusiness);
router.put('/:id', authenticateToken, checkAdminRole, businessController.updateBusiness);


module.exports = router;
