var mongoose = require("mongoose");
const {ObjectId}=require("mongodb")
var architectSchema=mongoose.Schema({
    user:{
        type: ObjectId,
        ref:"User",
        required: true,
    },
    company_name:{
        type: String,
        required: true,
    },
    company_licenseno:{
        type:String,
        required:true,
        unique: true
    },
    company_email:{
        type:String,
        required:true,
        unique: true
    },
    company_phone:{
        type:Number,
        required:true,
        unique: true
    },
    company_district:{
        type:String,
        required: true,
    },
    company_place:{
        type:String,
        required: true,
    },
    
    company_pincode:{
        type:Number,
        required: true,
    },
    pic:{
        type:String
    }
      
})
module.exports=mongoose.model("Architects",architectSchema);