const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = require('./UserSchema');

const SampleSchema = new Schema({
    task : {
        type:String,
        required: true
    },
    user : {
        type:UserSchema,
        required:true
    }
})

module.exports = mongoose.model('Sample',SampleSchema);