var mongoose = require('mongoose')

// WHAT IS AN PROPERTY
var schema = new mongoose.Schema({
    title : {type: String, required: true},
    type : {type: String},
    bedRooms : {type: Number},
    bathRooms : {type: Number},
    sqFeet : {type: Number},
    garage : {type: String},
    basement : {type: String},
    hoa : {type: Number},
    yearBuilt : {type: Number},
    price : {type: Number, required: true},
    contact : {type: String, required: true},
    location : {type: String, required: true},
    description : {type:String},
    img : {type: String, default: '//placehold.it/200x200'}
});

module.exports = mongoose.model('Property', schema);