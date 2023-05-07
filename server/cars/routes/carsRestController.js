const express = require('express');
const { getCars } = require('../models/carsAccessDataService');
const router = express.Router();
const { handleError } = require('../../utils/errorHandler');

router.get('/', async (req, res) => {
    try {
        const cars = await getCars();
        return res.send(cars);
    } catch (error) {
        return handleError(res, error.status || 403, error.message);
    }
});

module.exports = router;