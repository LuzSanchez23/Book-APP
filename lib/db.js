const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rosegold23',
    database: 'crud_books'
});

connection.connect(function(error){
    if (!!error) {
        console.log (error);
    } else {
        console.log('Connected...! to Database');
    }
});

module.exports = connection;