const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type:String,
        required: true
    }
});

const SampleSchema = new Schema({
    task : {
        type:String,
        required: true
    },
    user : {
        type:UserSchema,
        ref : 'User'
    }
})

module.exports = mongoose.model('Sample',SampleSchema);