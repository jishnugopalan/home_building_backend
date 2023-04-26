var mongoose = require("mongoose");
const {ObjectId}=require("mongodb")
var ConnectionSchema=mongoose.Schema({
    worker:{
        type:ObjectId,
        
    },
    user:{
        type:ObjectId,
        ref:"User"
    },
    status:{
        type:String,
        default:"request sent"
    },
    timestamp:{
        type:String,
        default:Date.now
    }

})
module.exports=mongoose.model("Connection",ConnectionSchema);