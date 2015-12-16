var mongoose = require('mongoose');

var kittySchema = mongoose.Schema({
	name: String
});

kittySchema.methods.sayMeow = function(){
	console.log(this.name + ' says Meow');
}

var Kitten = mongoose.model('Poonai', kittySchema);

module.exports = Kitten;