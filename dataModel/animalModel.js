var mongoose = require('mongoose');


var animalSchema = new mongoose.Schema({
	name : String,
	callName : String,
	type : String,
	description : String,
	title : String,
	bannerSrc : String,
	text : String,
	imgSrc : String,
	hrefUrl : String
});

// methods 是必须将model实例化出对象才能使用，statics可以直接在Schema对象下使用

animalSchema.methods.findByName = function(callName,cb){
	return this.model('Animal').find({callName:callName}).exec(cb);
};

animalSchema.statics.findAnimal = function(cb){
	//console.log('我是'+ this.type +', 我的学名叫'+ this.name+',人们叫我'+this.callName);
	return this.find({}).exec(cb);
};

animalSchema.statics.findByType = function(typeSearch,cb){
	return this.find({type:typeSearch},cb);
};


exports.animalSchema = animalSchema;

