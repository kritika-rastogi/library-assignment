const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect('mongodb+srv://admin123:admin123@cluster0-dbs9t.gcp.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, Accept,Content-Length, X-Requested-With, X-PINGOTHER');
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("We're connected to MLAB!")
});

require('./routes')(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))