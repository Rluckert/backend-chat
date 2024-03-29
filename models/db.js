'user strict';

var mysql = require('mysql'),
config = require('../config/config');

//local mysql db connection
var connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;