
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        max:50,
        min:2,
        unique:true
    },
    email:{
        type:String,
        require:true,
        max:50,
        min:2,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:6,
       
    },

},
{timestamps:true}
);


module.exports=mongoose.model("User",UserSchema)