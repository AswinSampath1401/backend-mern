const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampleSchema = new Schema({
    task : {
        type:String,
        required: true
    },
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
})

module.exports = mongoose.model('Sample',SampleSchema);