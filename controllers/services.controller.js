const serviceService = require('../services/services.service');

const addService = async (req, res) => {
    try {
        const data = req.body;
        const newService = await serviceService.addService(data);
        res.status(201).json(newService);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllServices = async (req, res) => {
    try {
        const services = await serviceService.getAllServices();
        res.status(200).json(services);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getServiceById = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const service = await serviceService.getServiceById(serviceId);
        res.status(200).json(service);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const newService = req.body;
        const service = await serviceService.updateServiceById(serviceId, newService);
        res.status(200).json(service);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const service = await serviceService.deleteServiceById(serviceId);
        res.json(service);
      } catch (error) {
        res.status(500).send(error.message);
      }
}

module.exports = {
    addService,
    getAllServices,
    getServiceById,
    updateService,
    deleteService,
};