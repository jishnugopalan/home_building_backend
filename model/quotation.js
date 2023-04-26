var mongoose = require("mongoose");
const {ObjectId}=require("mongodb")
var quotationSchema=mongoose.Schema({

    workerid:{
        type: ObjectId,
    },
    user:{
        type: ObjectId,
        ref:"User",
        required: true,
    },
    quotation:{
        type:String
    },
    reply:{
        type:String
    },
    timestamp:{
        type:String,
        default:Date.now
    }
})
module.exports=mongoose.model("Quotation",quotationSchema);
