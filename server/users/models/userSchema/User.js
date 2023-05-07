const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userIndex: {
        type: String,
    },
    fullName: {
        type: String,
    },
    address: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    img: {
        type: String,
    },
    birthday: {
        type: String,
    },
});

module.exports = mongoose.model("users", UserSchema);