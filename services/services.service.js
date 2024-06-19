const serviceModel = require("../models/services.model");


const addService = async (newService) => {
    try {
        const service = new serviceModel(newService);
        return await service.save();
    }
    catch (error) {
        console.error('Error adding service:', error);
        throw new Error('Failed to add service.');
    }
};

const getAllServices = async () => {
    try {
        const services = await serviceModel.find().exec();
        return services;
    } catch (error) {
        console.error('Error getting all service:', error);
        throw new Error('Failed to get all service.');
    }
};

const getServiceById = async (id) => {
    try {
        const service = await serviceModel.findById(id).exec();
        if (!service) {
            throw new Error('service not found');
        }
        return service;
    } catch (error) {
        console.error('Error getting service by ID:', error);
        throw new Error('Failed to get service by ID.');
    }
};

const updateServiceById = async (id, updateData) => {
    try {
        const service = await serviceModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
        if (!service) {
            throw new Error('service not found');
        }
        return service;
    } catch (error) {
        console.error('Error updating service by ID:', error);
        throw new Error('Failed to update service by ID.');
    }
};

const deleteServiceById = async (id) => {
    try {
        const service = await serviceModel.findByIdAndDelete(id).exec();
        if (!service) {
            throw new Error('service not found');
        }
        return service;
    } catch (error) {
        console.error('Error deleting service by ID:', error);
        throw new Error('Failed to delete service by ID.');
    }
};

module.exports = { addService, getAllServices, getServiceById, updateServiceById, deleteServiceById, };