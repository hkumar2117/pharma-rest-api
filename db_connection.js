var mysql = require('mysql');
var db;

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : '<USERNAME that tipically is root>',
    password : '<PASSWORD or just use null if youre working lcocally',
    database : '<DATABASE-NAME>'
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

module.exports = connection;
