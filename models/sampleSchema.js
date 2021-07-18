const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampleSchema = new Schema({
    task : {
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Sample',SampleSchema);