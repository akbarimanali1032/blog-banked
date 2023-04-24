const express = require("express");

const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
require('./model/crud')

app.use('/public', express.static('public'));

app.listen(5000, () => {
    console.log("hello ");
});

app.use('/api', require('./api/crudapi'));

app.use('/', (req, res) => {
    return res.send("<h1 align='center'>Blog Backend</h1>");
})