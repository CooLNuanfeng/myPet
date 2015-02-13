var mongoose = require('mongoose');


var animalSchema = new mongoose.Schema({
	name : String,
	callName : String,
	type : String,
	description : String,
	href : String,
	title : String,

});

// animalSchema.methods.findAnimalName = function(cb){
// 	return this.model('Animal').find({name:this.name},cb);
// };

animalSchema.statics.findAnimalType = function(cb){
	//console.log('我是'+ this.type +', 我的学名叫'+ this.name+',人们叫我'+this.callName);
	return this.find({},cb);
};

animalSchema.statics.findByType = function(type,cb){
	return this.find({type:type},cb);
};


exports.animalSchema = animalSchema;

