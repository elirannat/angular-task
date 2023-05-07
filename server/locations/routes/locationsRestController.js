const express = require('express');
const { getLocations ,searchByLocation } = require('../models/locationsAccessDataService');
const router = express.Router();
const { handleError } = require('../../utils/errorHandler');

router.get('/', async (req, res) => {
    try {
        const locations = await getLocations();
        return res.send(locations);
    } catch (error) {
        return handleError(res, error.status || 403, error.message);
    }
});
router.get('/searchByLoc', async (req, res) => {
    try {
        const locationData = await searchByLocation(req.query.carNum);
        return res.send(locationData);
    } catch (error) {
        return handleError(res, error.status || 403, error.message);
    }
});

module.exports = router;