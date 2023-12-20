const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: '',
    password: '',
    database: '2024preview'
});

connection.connect((err) => {
    if (err) console.log(err);
    console.log('Connected to MySQL database!');
});

module.exports = connection;