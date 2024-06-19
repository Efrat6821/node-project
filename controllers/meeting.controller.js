const meetingService = require('../services/meeting.service');

const addMeeting = async (req, res) => {
    try {
        const data = req.body;
        const newMeeting = await meetingService.addMeeting(data);
        res.status(201).json(newMeeting);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllMeetings = async (req, res) => {
    try {
        const meetings = await meetingService.getAllMeetings();
        res.status(200).json(meetings);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getMeetingById = async (req, res) => {
    try {
        const meetingId = req.params.id;
        const meeting = await meetingService.getMeetingById(meetingId);
        res.status(200).json(meeting);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateMeeting = async (req, res) => {
    try {
        const meetingId = req.params.id;
        const newMeeting = req.body;
        const meeting = await meetingService.updateMeeetingById(meetingId, newMeeting);
        res.status(200).json(meeting);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteMeeting = async (req, res) => {
    try {
        const meetingId = req.params.id;
        const meeting = await meetingService.deleteMeetingById(meetingId);
        res.json(meeting);
      } catch (error) {
        res.status(500).send(error.message);
      }
}

module.exports = {
    addMeeting,
    getAllMeetings,
    getMeetingById,
    updateMeeting,
    deleteMeeting,
};