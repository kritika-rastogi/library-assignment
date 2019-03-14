var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var subscriptionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    book: { type: Schema.Types.ObjectId, ref: 'Book' }
}, {timestamps: true});

module.exports = mongoose.model('Subscription', subscriptionSchema);