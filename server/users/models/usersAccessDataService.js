const UserSchema = require('./userSchema/User');

const getUsers = async () => {
    try {
        const users = await UserSchema.find({});
        return Promise.resolve(users);
    } catch (error) {
        error.status = 404;
        return Promise.reject(error);
    }
};

const searchUser = async (req) => {
    try {
        const query = {}
        query[req.prop] = { $regex: req.val+'', $options: "i" };
        const users = await UserSchema.find(query);
        return Promise.resolve(users);
    } catch (error) {
        error.status = 404;
        return Promise.reject(error);
    }
};
const searchUserByUserIndex = async (req) => {
    try {
        const user = await UserSchema.findOne({userIndex:{$eq: req}});
        return Promise.resolve(user);
    } catch (error) {
        error.status = 404;
        return Promise.reject(error);
    }
};
module.exports = { getUsers, searchUser, searchUserByUserIndex };