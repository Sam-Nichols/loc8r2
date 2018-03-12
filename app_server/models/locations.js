var mongoose = require( 'mongoose' );

var assignmentsSchema = new mongoose.Schema({
	assignment: {type: String, required: true},
	duedate: {type: String, required: true},
	points: {type: Number, "default": 0, min: 0, max: 100},
	status: String
});

var locationsSchema = new mongoose.Schema({
	name: {type: String, required: true},
	course: {type: String, required: true},
	professor: String
});