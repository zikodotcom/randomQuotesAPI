const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'sql304.infinityfree.com',
    user: 'if0_36857789',
    password: 'a0Nym6S8g2SUfg',
    database: 'if0_36857789_quotesDB'
  })
  
  module.exports = connection;