const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose.set('strictQuery', true);

mongoose.connect(`mongodb+srv://1:1@getinitdatafromdb.ptymmu0.mongodb.net/getInitDataFromDB`)
    .then(() => { console.log(chalk.magentaBright('Connected to monogDB Atlas')) })
    .catch((error) => console.log(chalk.redBright.bold(`monogDB error: ${error}`)));

module.exports = mongoose.connection;