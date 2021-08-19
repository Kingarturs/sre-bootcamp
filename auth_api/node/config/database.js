const mysql = require('mysql');
const util = require('util');

require('dotenv').config();

// The provided DB information is on a .env file
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});

db.query = util.promisify(db.query);

module.exports = db;