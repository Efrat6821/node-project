const express = require('express');
const meetingController = require('../controllers/meeting.controller');
const { checkAdminRole, authenticateToken } = require('../middleware/authenticate.middleware');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Meeting:
 *       type: object
 *       required:
 *         - title
 *         - date
 *         - time
 *       properties:
 *         id:
 *           type: string
 *           description: The meeting ID
 *         title:
 *           type: string
 *           description: The meeting title
 *         date:
 *           type: string
 *           format: date
 *           description: The meeting date
 *         participants:
 *           type: [string]
 *           description: participants in the meeting
 */

/**
 * @swagger
 * tags:
 *   name: Meetings
 *   description: The meetings managing API
 */

/**
 * @swagger
 * /meeting:
 *   get:
 *     summary: Returns the list of all the meetings
 *     tags: [Meetings]
 *     responses:
 *       200:
 *         description: The list of the meetings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Meeting'
 */
router.get('/', meetingController.getAllMeetings);

/**
 * @swagger
 * /meeting/{id}:
 *   get:
 *     summary: Get a meeting by ID
 *     tags: [Meetings]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The meeting ID
 *     responses:
 *       200:
 *         description: The meeting description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Meeting'
 *       404:
 *         description: The meeting was not found
 */
router.get('/:id', meetingController.getMeetingById);

/**
 * @swagger
 * /meeting:
 *   post:
 *     summary: Add a new meeting
 *     tags: [Meetings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meeting'
 *     responses:
 *       200:
 *         description: The meeting was successfully added
 *       500:
 *         description: Some server error
 */
router.post('/', meetingController.addMeeting);

/**
 * @swagger
 * /meeting/{id}:
 *   put:
 *     summary: Update a meeting by ID
 *     tags: [Meetings]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The meeting ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meeting'
 *     responses:
 *       200:
 *         description: The meeting was successfully updated
 *       404:
 *         description: The meeting was not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', meetingController.updateMeeting);

/**
 * @swagger
 * /meeting/{id}:
 *   delete:
 *     summary: Delete a meeting by ID  for admin
 *     tags: [Meetings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The meeting ID
 *     responses:
 *       200:
 *         description: The meeting was successfully deleted
 *       404:
 *         description: The meeting was not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', authenticateToken, checkAdminRole, meetingController.deleteMeeting);

module.exports = router;
