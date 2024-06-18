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

module.exports = {
    addBusiness,
};