const { json } = require('express');
const cors = require('cors');
const express = require('express');

const app = express();

require('./db/conne');

app.use(json());
app.use(cors());
app.listen(5000, () => {
    console.log('I am Server');
});

app.use('/api/', require('./api/crudapi'));
