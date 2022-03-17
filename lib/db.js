//----Local---------
const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rosegold23',
    database: 'crud_books'
});

// const mysql = require('mysql');

// let connection = mysql.createConnection({
//     host: 'us-cdbr-east-05.cleardb.net',
//     user: 'bf07c1bab8d303',
//     password: '9f774004',
//     database: 'heroku_12b58a866697e40'
// });


connection.connect(function(error){
    if (!!error) {
        console.log (error);
    } else {
        console.log('Connected...! to Database');
    }
});

module.exports = connection;

mysql//bf07c1bab8d303:9f774004@us-cdbr-east-05.cleardb.net/heroku_12b58a866697e40?reconnect=true
