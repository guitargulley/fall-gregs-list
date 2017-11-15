var mongoose = require('mongoose')

// WHAT IS AN INSTRUMENT
var schema = new mongoose.Schema({
    title : {type: String, required: true},
    type : {type: String},         
    year : {type: Number},
    price : {type: Number, required: true},           
    contact : {type: String, required: true},
    location : {type: String, required: true},           
    description : {type: String, required: true},
    img : {type: String, default: '//placehold.it/200x200'}
});

module.exports = mongoose.model('Instrument', schema);