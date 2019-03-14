var User = require('../models/user')

exports.addUser = (data) => {
    return new Promise((resolve, reject) => {
        var _user = new User(data)
        console.log(data)
        _user.save(function(result) {
        	console.log(result)
            resolve(result)
        })
    })
}
exports.getUsers = () => {
    return new Promise((resolve, reject) => {
        User.find()
            .exec((err, result) => {
                if (err) {
                    reject(err)
                } else resolve(result)
            })
    })
}

// exports.getUser = () => {
//     return new Promise((resolve, reject) => {
//         User.find()
//             .exec((err, result) => {
//                 if (err) {
//                     reject(err)
//                 } else resolve(result)
//             })
//     })
// }