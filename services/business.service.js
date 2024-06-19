const BusinessModel = require("../models/business.model");

const addBusiness = async (newBusiness) => {
    try {
        const business = new BusinessModel(newBusiness);
        return await business.save();
    }
    catch (error) {
        console.error('Error adding business:', error);
        throw new Error('Failed to add business.');
    }
};

const getBusinesses = async () => {
    try {
        const businesses = await BusinessModel.find().exec();
        return businesses;
    } catch (error) {
        console.error('Error getting business:', error);
        throw new Error('Failed to get business.');
    }
};

const getBusinessById = async (id) => {
    try {
        const business = await BusinessModel.findById(id).exec();
        if (!business) {
            throw new Error('Business not found');
        }
        return business;
    } catch (error) {
        console.error('Error getting business by ID:', error);
        throw new Error('Failed to get business by ID.');
    }
};

const updateBusinessById = async (id, updateData) => {
    try {
        const business = await BusinessModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
        if (!business) {
            throw new Error('Business not found');
        }
        return business;
    } catch (error) {
        console.error('Error updating business by ID:', error);
        throw new Error('Failed to update business by ID.');
    }
};

module.exports = { addBusiness, getBusinesses, getBusinessById, updateBusinessById };