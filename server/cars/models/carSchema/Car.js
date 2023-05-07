const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    carNumber: {
        type: String,
    },
    carColor: {
        type: String,
    },
    carBranch: {
        type: String,
    },
    userIndex: {
        type: String,
    },
});

module.exports = mongoose.model("cars", CarSchema);