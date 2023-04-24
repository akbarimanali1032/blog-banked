const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({
    titel: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    path: {
        type: Number,
        required: true,
    },
    fileprth: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('cruds', crudSchema);