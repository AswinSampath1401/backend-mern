const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const UserSchema = require('./UserSchema');

// const UserSchema = new Schema({
//     name : {
//         type:String,
//         required: true
//     }
// });

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