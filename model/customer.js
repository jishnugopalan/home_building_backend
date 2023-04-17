var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var customerSchema=mongoose.Schema({

    user:{
        type: ObjectId,
        ref:"User",
        required: true,
    },   
    
    district:{
        type:String,
        required: true,
    },
    place:{
        type:String,
        required: true,
    },
   
    housename:{
        type:String,
        required: true,
    },
    pincode:{
        type:Number,
        required: true,
    },
   
    
})
module.exports=mongoose.model("Customer",customerSchema);