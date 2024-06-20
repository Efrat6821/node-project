const express = require('express');
const serviceController = require('../controllers/services.controller');
const { checkAdminRole, authenticateToken } = require('../middleware/authenticate.middleware');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: integer
 *           description: The service ID
 *         name:
 *           type: string
 *           description: The service name
 *         cost:
 *           type: integer
 *           description: The service cost
 */

/**
 * @swagger
 * tags:
 *   name: Services
 *   description: The services managing API
 */

/**
 * @swagger
 * /service:
 *   get:
 *     summary: Returns the list of all the services
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: The list of the services
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 */

router.get('/', serviceController.getAllServices);

/**
 * @swagger
 * /service/{id}:
 *   get:
 *     summary: Get a service by ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The service ID
 *     responses:
 *       200:
 *         description: The service description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       404:
 *         description: The service was not found
 */

router.get('/:id', serviceController.getServiceById);

/**
 * @swagger
 * /service:
 *   post:
 *     summary: Add a new service for admin
 *     tags: [Services]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: The service was successfully added
 *       500:
 *         description: Some server error
 */

router.post('/', authenticateToken, checkAdminRole, serviceController.addService);

/**
 * @swagger
 * /service/{id}:
 *   put:
 *     summary: Update a service by ID for admin
 *     tags: [Services]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The service ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: The service was successfully updated
 *       404:
 *         description: The service was not found
 *       500:
 *         description: Some server error
 */

router.put('/:id', authenticateToken, checkAdminRole, serviceController.updateService);

/**
 * @swagger
 * /service/{id}:
 *   delete:
 *     summary: Delete a service by ID for admin
 *     tags: [Services]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The service ID
 *     responses:
 *       200:
 *         description: The service was successfully deleted
 *       404:
 *         description: The service was not found
 *       500:
 *         description: Some server error
 */

router.delete('/:id', authenticateToken, checkAdminRole, serviceController.deleteService);

module.exports = router;
