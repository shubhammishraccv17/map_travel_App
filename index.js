const express = require("express");
const mongoose = require("mongoose");
const dotenv =require("dotenv")
const pinRouter=require("./ROUTE/pins")
const userRouter=require("./ROUTE/users")
const path =require('path')
 


const app =express()
dotenv.config()

app.use(express.json())



mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true, useUnifiedTopology: true,useCreateIndex: true}).then(
    ()=>{console.log("database connected")}
).catch((err)=>{console.log(err)})


app.use("/api/pin",pinRouter)

app.use("/api/user",userRouter)



if(process.env.NODE_ENV==="production"){
    app.use(express.static('client/build'));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    })
}











const port=process.env.PORT||8800;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})