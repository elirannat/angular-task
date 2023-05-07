const express = require('express');
const connectToDB = require('./db/dbService');
const app = express();
const chalk = require('chalk');
const router = require('./router/router');
const cors = require('./middlewares/cors');

app.use(cors);
app.use(express.json());
app.use(express.static('./public'));
app.use(router);

const PORT = 9191;

app.listen(PORT, async () => {
    console.log(chalk.yellowBright(`Listening on: http://localhost:${PORT}`));
    connectToDB();
});