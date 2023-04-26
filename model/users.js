var mongoose = require("mongoose");
var userSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    phone:{
        type:Number,
        required:true,
        
    },
    password:{
        type:String,
        required:true
    },
    usertype:{
        type:String,
        required:true,
        default:"customer"
    }


})
module.exports=mongoose.model("User",userSchema);