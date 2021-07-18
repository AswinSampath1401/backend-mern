const express = require('express');
const router = express.Router();
// Get the model
const Sample = require('../models/sampleSchema');

router.get('/',(req,res)=>{
    Sample.find().then(sample=>res.json(sample)).catch(err=>res.send(err))
})

router.post('/',(req,res)=>{
    const dataTobeInserted = new Sample({
        task : req.body.task,
        user : req.body.user
    })
    console.log(dataTobeInserted);
    Sample.create(dataTobeInserted).then(res.send('Data Inserted Successfully 😄🙌💥')).catch(err=>res.send(err));
    // Sample.create(dataTobeInserted)
    //     .then((dataTobeInserted)=>{
    //         dataTobeInserted.user.name = req.user.name
    //         dataTobeInserted.save()
    //             .then((dataTobeInserted)=>res.json({dataTobeInserted}))
    //             .catch(err=>res.json(err))
    //     })
    //     .catch(err=>res.json(err))
})

router.put('/:id',(req,res)=>{
    const {id} = req.params;
    Sample.findByIdAndUpdate(id,req.body).then(res.json('Data Updated Successfully 🙌🤙🤝')).catch(err=>res.json(err));
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params
    Sample.findByIdAndDelete(id).then(res.json('Data Deleted 😧😨🤯')).catch(err=>res.json(err));
})

module.exports = router;