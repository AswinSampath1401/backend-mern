const mongoose = require('mongoose');

const connectDB = ()=>{

    mongoose.connect(process.env.MONGO_URL,{
        useFindAndModify:false,
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    }).then(()=>console.log('Database Connection Successful😀😁'))
        .catch(err=>console.log(err))

}

module.exports = connectDB