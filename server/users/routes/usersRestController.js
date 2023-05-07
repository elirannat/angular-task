const express = require('express');
const { getUsers, searchUser } = require('../models/usersAccessDataService');
const router = express.Router();
const { handleError } = require('../../utils/errorHandler');

router.get('/', async (req, res) => {
    try {
        const users = await getUsers();
        return res.send(users);
    } catch (error) {
        return handleError(res, error.status || 403, error.message);
    }
});

router.get('/search', async (req, res) => {
    try {
        const users = await searchUser(req.query);
        return res.send(users);
    } catch (error) {
        return handleError(res, error.status || 403, error.message);
    }
});

module.exports = router;