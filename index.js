const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

const connectDB = require('./db/db');
const router = require('./routes/router');

const PORT = process.env.PORT || 5000;

// console.log(`${PORT} ${MONGO_URL}`);

const app = express()

// Middleware
app.use(express.json())
mongoose.set('useFindAndModify', true);

// Database Connection 
connectDB()

// Router for the app
app.use('/',router);

app.listen(PORT,(req,res)=>{
    console.log(`App is listening on Port ${PORT}`);
})