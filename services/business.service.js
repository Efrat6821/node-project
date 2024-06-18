const BusinessModel = require("../models/business.model");

const addBusiness = async (newBusiness) => {
    const business = new BusinessModel(newBusiness);
    return await business.save();
}
module.exports = { addBusiness, };