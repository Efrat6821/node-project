const MeetingModel = require("../models/meeting.model");
// title: String,
// date: Date,
// participants

const addMeeting = async (newMeeting) => {
    try {
        const meeting = new MeetingModel(newMeeting);
        return await meeting.save();
    }
    catch (error) {
        console.error('Error adding meeting:', error);
        throw new Error('Failed to add meeting.');
    }
};

const getAllMeetings = async () => {
    try {
        const meetings = await MeetingModel.find().exec();
        return meetings;
    } catch (error) {
        console.error('Error getting all meeting:', error);
        throw new Error('Failed to get all meeting.');
    }
};

const getMeetingById = async (id) => {
    try {
        const meeting = await MeetingModel.findById(id).exec();
        if (!meeting) {
            throw new Error('Meeting not found');
        }
        return meeting;
    } catch (error) {
        console.error('Error getting meeting by ID:', error);
        throw new Error('Failed to get meeting by ID.');
    }
};

const updateMeeetingById = async (id, updateData) => {
    try {
        const meeting = await MeetingModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
        if (!meeting) {
            throw new Error('Meeting not found');
        }
        return meeting;
    } catch (error) {
        console.error('Error updating meeting by ID:', error);
        throw new Error('Failed to update meeting by ID.');
    }
};

const deleteMeetingById = async (id) => {
    try {
        const meeting = await MeetingModel.findByIdAndDelete(id).exec();
        if (!meeting) {
            throw new Error('Meeting not found');
        }
        return meeting;
    } catch (error) {
        console.error('Error deleting meeting by ID:', error);
        throw new Error('Failed to delete meeting by ID.');
    }
};

module.exports = { addMeeting, getAllMeetings, getMeetingById, updateMeeetingById, deleteMeetingById, };