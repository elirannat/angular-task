const chalk = require('chalk');

const handleError = (res, status, message) => {
    console.log(chalk.redBright(message));
    return res.status(status).send(message);
};

module.exports = { handleError };