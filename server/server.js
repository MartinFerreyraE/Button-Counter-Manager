const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/buttons', (req, res) => {
    const BUTTON_QUERY = "SELECT * FROM buttonsmanager.buttons";
    connection.query(BUTTON_QUERY, (err, response) => {
        if(err) console.log(err)
        else res.send(response)
    })

})

app.post('/addButton', (req, res) => {
    console.log(req.body.button)
    const ADD_QUERY = `INSERT INTO buttonsmanager.buttons (button) values ('${req.body.button}')`
    connection.query(ADD_QUERY, (err, response) => {
        if(err) console.log(err)
        else res.send(response)
    })
})

app.put('/addButton/:idbuttons', (req, res) => {
    console.log(req.body.button)
    const PUT_QUERY = `UPDATE buttonsmanager.buttons SET counter = counter + 1 WHERE (idbuttons=${req.params.idbuttons})`
    connection.query(PUT_QUERY, (err, response) => {
        if(err) console.log(err)
        else res.send(response)
    })
})

app.delete('/deleteButton/:idbuttons', (req, res) => {
    const DELETE_QUERY = `DELETE FROM buttonsmanager.buttons where (idbuttons=${req.params.idbuttons})`
    connection.query(DELETE_QUERY, (err, response) => {
        if(err) console.log(err)
    })
})

app.listen(4000, () => {
    console.log('Running on port 4000')
})
