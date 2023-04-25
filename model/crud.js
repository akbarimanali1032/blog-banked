const mongoose = require('mongoose');

const blogListsSchema = new mongoose.Schema({
    titel: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    fileprth: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('blogLists', blogListsSchema);