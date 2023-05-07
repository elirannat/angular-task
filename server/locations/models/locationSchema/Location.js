const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    locationLatLng: {
        type: String,
    },
    carNumber: {
        type: String,
    },
    dateTime: {
        type: String,
    },
    img: {
        type: String,
    },
});

module.exports = mongoose.model("locations", LocationSchema);