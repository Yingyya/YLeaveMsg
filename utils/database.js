const {
    Config, JsonDB
} = require('node-json-db')
const path = require('path')
module.exports = new JsonDB(new Config(path.join(__dirname, '../message.json'), true, false, '/'));