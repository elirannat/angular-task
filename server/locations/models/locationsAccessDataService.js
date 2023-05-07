const LocationSchema = require('./locationSchema/Location');
const { searchCar } = require('../../cars/models/carsAccessDataService');
const { searchUserByUserIndex } = require('../../users/models/usersAccessDataService');



const getLocations = async () => {
    try {
        const locations = await LocationSchema.find({});
        return Promise.resolve(locations);
    } catch (error) {
        error.status = 404;
        return Promise.reject(error);
    }
};
const searchByLocation = async (req) => {
    try {
        const location = await LocationSchema.findOne({carNumber:{$eq: req}});
        const car  = await searchCar(location.carNumber);
        const user = await searchUserByUserIndex(car.userIndex);
        return Promise.resolve({
            location : location,
            car : car,
            user : user
        });
    } catch (error) {
        error.status = 404;
        return Promise.reject(error);
    }
};

module.exports = { getLocations ,searchByLocation };