var Subscription = require('../models/subscription')

exports.addSubscription = (data) => {
    return new Promise((resolve, reject) => {
        var _subscription = new Subscription(data)
        console.log(data)
        _subscription.save(function(result) {
            console.log(result)
            resolve(result)
        })
    })
}
exports.getSubscriptions = () => {
    return new Promise((resolve, reject) => {
        Subscription.find()
            .exec((err, result) => {
                if (err) {
                    reject(err)
                } else resolve(result)
            })
    })
}

// exports.getSubscriptionsForUser = (userId) => {
//     return new Promise((resolve, reject) => {
//         Subscription.countDocuments({ user: '5c8a1d56010cb254fa974ee2' }, (err, result) => {
//             if (err) {
//                 console.log('error')
//                 reject(err)
//             } else resolve(result)
//         })
//     })
// }