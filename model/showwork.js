var mongoose = require("mongoose");
const {ObjectId}=require("mongodb")
var shoWorkSchema=mongoose.Schema({
    user:{
        type: ObjectId,
        ref:"User",
    },
    work_name:{
        type:String,

    },
    work_description:{
        type:String
    },
    work_image:{
        type:String
    }
})
