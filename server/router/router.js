const express = require('express');
const router = express.Router();

const usersRestController = require('../users/routes/usersRestController');
const carsRestController = require('../cars/routes/carsRestController');
const locationsRestController = require('../locations/routes/locationsRestController');
const { handleError } = require('../utils/errorHandler');

router.use('/users', usersRestController);
router.use('/cars', carsRestController);
router.use('/locations', locationsRestController);

router.use((err, req, res, next) => {
    handleError(res, 404, 'Error 404: Page not found.')
});

module.exports = router;