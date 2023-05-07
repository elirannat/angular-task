const CarSchema = require('./carSchema/Car');

const getCars = async () => {
    try {
        const cars = await CarSchema.find({});
        return Promise.resolve(cars);
    } catch (error) {
        error.status = 404;
        return Promise.reject(error);
    }
};
const searchCar = async (req) => {
    try {
        const car = await CarSchema.findOne({carNumber :{$eq: req}});
        return Promise.resolve(car);
    } catch (error) {
        error.status = 404;
        return Promise.reject(error);
    }
};
module.exports = { getCars ,searchCar};