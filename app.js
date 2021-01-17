var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var fs = require('fs');
var path = require('path');



// Connecting to the database 
mongoose.connect('mongodb://localhost:27017/imgUpload',
	{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
		console.log('connected')
	});




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



var fs = require('fs');
var path = require('path');
var multer = require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now())
	}
});

var upload = multer({ storage: storage });
var imgModel = require('./model');


// Fetch All Public images
app.post('/fetchAllPublicImages', (req, res, next) => {
	var query ={permission:"public"}
	imgModel.find(query, function(err, document){
		console.log("quert",query,document)
		if (err) {
			console.log(err);
		}
		else {
			res.send(document);
		}
	});
});

//fetch Private and public images of users
app.post('/fetchUserBasedImages', (req, res, next) => {
	var query ={user:req.body.user}
	imgModel.find(query, function(err, document){
		console.log("quert",query,document)
		if (err) {
			console.log(err);
		}
		if(document.length == 0){
			res.json({Status:'false', Message: 'No images Found for this user'});

		}
		else {
			res.send(document);
		}
	});
});

//Search Images based on name and only if they are public
app.post('/searchImages', (req, res, next) => {
	var query ={name:req.body.name, permission: 'public'}
	imgModel.find(query, function(err, document){
		console.log("query",query,document)
		if (err) {
			console.log(err);
		}
		if(document.length == 0){
			res.json({Status:'false', Message: 'No images Found'});

		}
		else {
			res.send(document);
		}
	});
});

//delete will only work if correct body parameters are provided, 
app.post('/delete', (req,res,next) =>{
var query = {name : req.body.name, user:req.body.user}
console.log("query",query)
imgModel.deleteOne(query, function(err, obj) {
	console.log("obj111",obj)
	if (err) throw err;
	if(obj.deletedCount == 1){
		res.json({Status: 'True', Message: 'Sucessfully Deleted'})

	}
	if(obj.n == 0){
		res.json({Status: 'False', Message: 'No results Found'})
	}


});

});

app.post('/uploadImage', upload.single('image'), (req, res, next) => {
	var obj = {
		name: req.body.name,
		permission: req.body.permission,
		user: req.body.user,
		img: {
			data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
		}
	}
	imgModel.create(obj, (err, item) => {
		if (err) {
			console.log(err);
		}
		else {
			res.json({Status: 'Sucesss', Message: 'Successfully Uploaded Images'});
		}
	});
});
app.listen('3000' || process.env.PORT, err => {
	if (err)
		throw err
	console.log('Server started')
})