var mongoose = require('mongoose')

var bookSchema = new mongoose.Schema({
    name: String,
    class: String
});

module.exports = mongoose.model('Book', bookSchema);