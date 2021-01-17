var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
	name: String,
	permission : String,
	user: String,
	img:
	{
		data: Buffer,
	}
});

//Image is a model which has a schema imageSchema


module.exports = new mongoose.model('Image', imageSchema);