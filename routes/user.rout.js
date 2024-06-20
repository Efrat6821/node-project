const express = require('express');
const userController = require('../controllers/user.controller');
const { checkAdminRole, authenticateToken } = require('../middleware/authenticate.middleware');


const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - username
 *       properties:
 *         email:
 *           type: string
 *           description: The user email
 *         username:
 *           type: string
 *           description: The user username
 *         password:
 *           type: string
 *           description: The user password
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Returns the list of all the users for admin
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.get('/', authenticateToken, checkAdminRole, userController.Get);
/**
 * @swagger
 * /user/signIn:
 *   post:
 *     summary: Sign in a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User signed in successfully
 *       500:
 *         description: Some server error
 */
router.post('/signIn', userController.signIn);

/**
 * @swagger
 * /user/signUp:
 *   post:
 *     summary: Sign up a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User signed up successfully
 *       500:
 *         description: Some server error
 */
router.post('/signUp', userController.signUp);

module.exports = router;