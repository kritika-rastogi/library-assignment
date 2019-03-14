var Book = require('../models/books')

exports.addBook = (data) => {
    return new Promise((resolve, reject) => {
        var _book = new Book(data)
        console.log(data)
        _book.save(function(result) {
            console.log(result)
            resolve(result)
        })
    })
}
exports.getBooks = () => {
    return new Promise((resolve, reject) => {
        Book.find()
            .exec((err, result) => {
                if (err) {
                    reject(err)
                } else resolve(result)
            })
    })
}