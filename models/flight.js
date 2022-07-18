const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum:['American', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    flightNo: Number,
    departs: Date,

})

module.exports = mongoose.model('Flight', flightSchema);