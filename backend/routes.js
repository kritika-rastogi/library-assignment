var UserCtrl = require('./database/controllers/user')
var BookCtrl = require('./database/controllers/books')
var SubscriptionCtrl = require('./database/controllers/subscription')

module.exports = function(app) {

    // User routes
    app.route('/users')
        .get(async (req, res) => {
            try {
                var response = await UserCtrl.getUsers()
                res.send(response)
            } catch (err) {
                console.log(err)
            }

        })
        .post(async (req, res) => {
            try {
                var response = await UserCtrl.addUser(req.body)
                res.send('Added user!')
            } catch (err) {
                console.log(err)
            }
        })

    // Book routes
    app.route('/books')
        .get(async (req, res) => {
            try {
                var response = await BookCtrl.getBooks()
                res.send(response)
            } catch (err) {
                console.log(err)
                res.send('error')
            }

        })
        .post(async (req, res) => {
            try {
                var response = await BookCtrl.addBook(req.body)
                res.send('Added book!')
            } catch (err) {
                console.log(err)
                res.send('error')
            }
        })


    // Subscription routes
    app.route('/subscriptions')
        .get(async (req, res) => {
            try {
                var response = await SubscriptionCtrl.getSubscriptionsForUser('5c8a0d06d0f68b535d6e2f09')
                res.send(response)
            } catch (err) {
                console.log(err)
                res.send('error')
            }

        })
        .post(async (req, res) => {
            try {
                var response = await SubscriptionCtrl.addSubscription(req.body)
                res.send('Added subscription!')
            } catch (err) {
                console.log(err)
                res.send('error')
            }
        })


}