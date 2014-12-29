var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Admin = new Schema({
	name : String,
	sex : { type: Number, default: 0}, // 0 男， 1 女
	birthday : Date,
	phone : String,
	email : String,
	createtime : Date,
	updatetime : {type: Date, default: Date.Now}
	this.barbershopids : Array;

});

Admin.statics.save = function(admin, cb){
	admin.save(function(err){
		if(err) {
			cb(err);
		}else {
			cb(null, admin);
		}
	});
}

module.exports = mongoose.model('Admin', Admin);