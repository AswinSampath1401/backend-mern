const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = require('./AddressSchema');

const UserSchema = new Schema({
    name : {
        type:String,
        required: true
    },
    address : {
        type: AddressSchema,
        required : true
    }
});

module.exports = UserSchema