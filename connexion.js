const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'sql7.freesqldatabase.com',
    user: 'sql7720516',
    password: '36l2snw3p5',
    database: 'sql7720516'
  })
  
  module.exports = connection;