const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connexion = require('./connexion');
const cors = require('cors')
connexion.connect();
// Connect to the database
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req,res) => {
    let randomNumber = Math.floor(Math.random() * 83);
    connexion.query(`SELECT * from quotes WHERE id = ${randomNumber}`, (err, rows, fields) => {
        if (err) throw err
      
        res.json(rows[0])
      })
})



app.listen(3000, () => {
    console.log('Express js run successfully');
})