const connectDB = () => {
    require('./mongoDB/connectToAtlas');
}

module.exports = connectDB;