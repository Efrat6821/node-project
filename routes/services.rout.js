const express = require('express');
const serviceController = require('../controllers/services.controller');
const { checkAdminRole, authenticateToken } = require('../middleware/authenticate.middleware');



const router = express.Router();

router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getServiceById);
router.post('/', authenticateToken, checkAdminRole, serviceController.addService);
router.put('/:id', authenticateToken, checkAdminRole, serviceController.updateService);
router.delete('/:id', authenticateToken, checkAdminRole, serviceController.deleteService);


module.exports = router;