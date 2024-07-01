const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: String,
    manufacturer: String,
    year: Number,
    volume: Number,
    price: Number,
    color: String,
    description: String
});

module.exports = mongoose.model('Car', carSchema);
