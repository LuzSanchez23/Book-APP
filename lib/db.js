const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rosegold23',
    database: 'crud_books'
});
var del = connection._protocol._delegateError;
connection._protocol._delegateError = function(err, sequence){
  if (err.fatal) {
    console.trace('fatal error: ' + err.message);
  }
  return del.call(this, err, sequence);
};
connection.connect(function(error){
    if (!!error) {
        console.log (error);
    } else {
        console.log('Connected...! to Database');
    }
});

module.exports = connection;