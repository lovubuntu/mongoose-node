var mongoose = require('mongoose');
var Kitten = require('./model/kitty');
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.on('open', function (callback) {
  console.log('Connected');
});

var jimmy = new Kitten({name: 'Naan oru poonai'});
jimmy.save(function(err, jimmy){
	if (err) return console.err(err);
	console.log(jimmy);
	jimmy.sayMeow();
});

jimmy.sayMeow();