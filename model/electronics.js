var mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema
var electronicsSchema=mongoose.Schema({
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
    company_pic:{
        type:String,
        
    },
    company_description:{
        type:String
    },
    company_working_time:{
        type:String
    }
      
})
module.exports=mongoose.model("Electrician",electronicsSchema);