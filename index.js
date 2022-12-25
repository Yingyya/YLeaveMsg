const express = require('express');
const app = express();
const logger = require('./utils/logger');
const database = require('./utils/database');
const bodyParser = require('body-parser');
process.on('uncaughtException', (e) => {
    logger.error('uncaughtException: ' + e);
});
app.use(express.static('public'));
app.use((req, res, next) => {
    req.database = database;
    next();
});
app.use(bodyParser.urlencoded({
    extended: false
}));
app.get('/get', require('./controller/get'));
app.post('/send', require('./controller/send'));
app.listen(8080, () => {
    logger.info('🎉 Service is running at port 8080.');
});