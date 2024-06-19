const businessService = require('../services/business.service');

const addBusiness = async (req, res) => {
    try {
        const data = req.body;
        const newBusiness = await businessService.addBusiness(data);
        res.status(201).json(newBusiness);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getBusinesses = async (req, res) => {
    try {
        const businesses = await businessService.getBusinesses();
        res.status(200).json(businesses);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getBusiness = async (req, res) => {
    try {
        const businessId = req.params.id;
        const business = await businessService.getBusinessById(businessId);
        res.status(200).json(business);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateBusiness = async (req, res) => {
    try {
        const businessId = req.params.id;
        const newBusiness = req.body;
        const business = await businessService.updateBusinessById(businessId, newBusiness);
        res.status(200).json(business);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    addBusiness,
    getBusinesses,
    getBusiness,
    updateBusiness,
};