var Connection=require("../model/connections")
const {ObjectId}=require("mongodb")

exports.sendConnectionRequest=(req,res)=>{
    Connection.findOne({worker:ObjectId(req.body.worker),user:ObjectId(req.body.user)},(err,conn)=>{
        if(err)
        return res.status(404).json({msg:err})
        else if(conn){
        return res.status(400).json({msg:"Connection already sent"})
        }
        else{
            let newConnection=Connection(req.body)
            newConnection.save((err,connection)=>{
                if(err)
                return res.status(404).json({msg:err})
                else if(connection)
                return res.status(201).json({msg:"Connection request sent"})
            })
        }
    })
    
}
exports.viewConnectionByUser=(req,res)=>{
    Connection.aggregate([
       {
        $lookup:{
            from:"users",
            localField:"worker",
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
exports.viewConnectionByVendor=(req,res)=>{
    Connection.find({worker:ObjectId(req.body.userid)}).populate("user").exec((err,conn)=>{
        if(err)
        return res.status(404).json({msg:"Error"})
        else if(conn)
        return res.status(201).json(conn)
    })
}
exports.updateConnectStatus=(req,res)=>{
    Connection.updateOne({_id:ObjectId(req.body.connectionid)},{
        $set:{
            status:req.body.status
        }
    }).exec((err,landupd)=>{
        if(err)
        return res.status(404).json({error:"Error in fetching data"})
        else if(landupd)
        return res.status(201).json({msg:"Status Updated"})
    })
}
exports.viewConnectionById=(req,res)=>{
    console.log(req.body)
    Connection.findOne({_id:ObjectId(req.body.connectonid)}).populate("user").exec((err,conn)=>{
        if(err){
            console.log(err)
            return res.status(404).json({msg:"Error"})
        }
        
        else if(conn){
            console.log("inn")
            return res.status(201).json(conn)

        }
        else{
            console.log("in")   
        }
    })
}