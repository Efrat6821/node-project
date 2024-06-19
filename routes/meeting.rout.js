const express = require('express');
const meetingController = require('../controllers/meeting.controller');
const { checkAdminRole, authenticateToken } = require('../middleware/authenticate.middleware');



const router = express.Router();

router.get('/', meetingController.getAllMeetings);
router.get('/:id', meetingController.getMeetingById);
router.post('/', meetingController.addMeeting);
router.put('/:id', meetingController.updateMeeting);
router.delete('/:id', authenticateToken, checkAdminRole, meetingController.deleteMeeting);


module.exports = router;