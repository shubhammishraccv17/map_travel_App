const express = require("express");
const router = express.Router();
const Pin =require("../MODEL/Pin");






//create a pin



router.post('/', async (req,res)=>{
    const newpin=new Pin(req.body)

try{
    const savedPin=await newpin.save()
    res.status(200).json(savedPin)
}
catch(err){res.status(500).json(err)}


})


// get all pin
router.get('/', async (req,res)=>{
try{
    const Pins=await Pin.find();
    res.status(200).json(Pins)
}
catch(err){res.status(500).json(err)}


})














module.exports=router