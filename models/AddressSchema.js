// Here we make an Address Schema to use inside User
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    street : {
        type:String,
        required:true
    },
    city : {
        type:String,
        required:true
    },
    state : {
        type:String,
        required:true
    },
    pincode : {
        type:String,
        required : true
    }
});

// module.exports = mongoose.model('Address',AddressSchema);