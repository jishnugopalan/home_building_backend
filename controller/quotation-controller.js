
var Quotation=require("../model/quotation")
const {ObjectId}=require("mongodb")

exports.AddQuotation=(req,res)=>{
    req.body.workerid=ObjectId(req.body.workerid)
    req.body.user=ObjectId(req.body.user)
    let newQuotation=Quotation(req.body)
    newQuotation.save((err,quotation)=>{
        if(err){
            console.log(err)
            return res.status(404).json({msg:"Error"})
        }
        
        else if(quotation)
        return res.status(201).json(quotation)
        else
        console.log("in else")
    })
}
exports.viewQuotationsByVendor=(req,res)=>{
    Quotation.find({workerid:ObjectId(req.body.userid)}).populate("user").exec((err,quotation)=>{
        if(err)
        return res.status(404).json({msg:"Error"})
        else if(quotation)
        return res.status(201).json(quotation)
    })
}

exports.viewQuotationsByCustomer=(req,res)=>{
    Quotation.aggregate([
        {
         $lookup:{
             from:"users",
             localField:"workerid",
             foreignField:"_id",
             as:"worker"
 
         }
        },
        {
         $match:{
             user:ObjectId(req.body.userid)
         }
        }
     ]).exec((err,conn)=>{
         if(err)
         return res.status(404).json({msg:"Error"})
         else if(conn)
         return res.status(201).json(conn)
     })
}
exports.findQuotationById=(req,res)=>{
    Quotation.findOne({_id:ObjectId(req.body.quotationid)}).populate("user").exec((err,quotation)=>{
        if(err)
        return res.status(404).json({msg:"Error"})
        else if(quotation)
        return res.status(201).json(quotation)
    })
}
exports.sendReply=(req,res)=>{
    Quotation.updateOne({_id:ObjectId(req.body.quotationid)},
    {
        $set:{
            reply:req.body.reply
        }
    }
    ).exec((err,landupd)=>{
        if(err)
        return res.status(404).json({error:"Error in fetching data"})
        else if(landupd)
        return res.status(201).json({msg:"Status Updated"})
    })

}
