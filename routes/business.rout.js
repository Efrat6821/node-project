const express = require('express');
const businessController = require('../controllers/business.controller');
const { checkAdminRole, authenticateToken } = require('../middleware/authenticate.middleware');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Business:
 *       type: object
 *       required:
 *         - name
 *         - address
 *         - phone
 *       properties:
 *         id:
 *           type: string
 *           description: The business ID
 *         name:
 *           type: string
 *           description: The business name
 *         address:
 *           type: string
 *           description: The business address
 *         phone:
 *           type: string
 *           description: The business phone number
 */

/**
 * @swagger
 * tags:
 *   name: Businesses
 *   description: The businesses managing API
 */

/**
 * @swagger
 * /business:
 *   get:
 *     summary: Returns the list of all the businesses for admin
 *     tags: [Businesses]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The list of the businesses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Business'
 */
router.get('/', authenticateToken, checkAdminRole, businessController.getBusinesses);

/**
 * @swagger
 * /business/{id}:
 *   get:
 *     summary: Get a business by ID for admin
 *     tags: [Businesses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The business ID
 *     responses:
 *       200:
 *         description: The business description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 *       404:
 *         description: The business was not found
 */
router.get('/:id', authenticateToken, checkAdminRole, businessController.getBusiness);

/**
 * @swagger
 * /business:
 *   post:
 *     summary: Add a new business for admin
 *     tags: [Businesses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       200:
 *         description: The business was successfully added
 *       500:
 *         description: Some server error
 */
router.post('/', authenticateToken, checkAdminRole, businessController.addBusiness);

/**
 * @swagger
 * /business/{id}:
 *   put:
 *     summary: Update a business by ID for admin
 *     tags: [Businesses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The business ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       200:
 *         description: The business was successfully updated
 *       404:
 *         description: The business was not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', authenticateToken, checkAdminRole, businessController.updateBusiness);

module.exports = router;
