var mongoose = require('mongoose')

// WHAT IS AN ANIMAL
var schema = new mongoose.Schema({
    title : {type: String, required: true},
    type : { type: String, required: true},
    breed : {type: String},
    age : {type: Number},
    price : {type: Number, required: true},
    contact : {type: String, required: true},
    location : {type: String, required: true},
    description : {type: String},
    img : {type: String, default: '//placehold.it/200x200'}
   
});

module.exports = mongoose.model('Animal', schema);