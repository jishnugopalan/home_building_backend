const Work=require("../model/showwork")
const User=require("../model/users")
const Architect=require("../model/architect")
const Interior=require('../model/interiordesigner')
const Electrician=require("../model/electronics")
const {ObjectId}=require("mongodb")


exports.addWorks=(req,res)=>{
    let newWork=Work(req.body)
    newWork.save((err,work)=>{
        if(err)
        return res.status(404).json({msg:"Error in adding works"})
        if(work)
        return res.status(201).json(work)
    })

}
exports.viewWorkByWorkerId=(req,res)=>{

    Worker.find({user:ObjectId(req.body.workerid)},(err,work)=>{
        if(err)
        return res.status(404).json({msg:"Error in view work by worker"})
        if(work)
        return res.status(201).json(work)
    })
}
exports.viewWorkByCustomer=(req,res)=>{
    Worker.find({user:ObjectId(req.body.workerid)})((err,work)=>{
        if(err)
        return res.status(404).json({msg:"Error in view work by customer"})
        if(work)
        return res.status(201).json(work)
    })
}
exports.viewWorkByWorkerId=(req,res)=>{

    Worker.findOne({_id:ObjectId(req.body.workid)}).populate("user").exec((err,work)=>{
        if(err)
        return res.status(404).json({msg:"Error in view work by id"})
        if(work)
        return res.status(201).json(work)  
    })
}

exports.listAllArchitects=(req,res)=>{
    Architect.find({}).populate("user").exec((err,architect)=>{
        if(err)
        return res.status(404).json({msg:"Error in getting architect"})
        if(architect)
        return res.status(201).json(architect)
    })
    
}
exports.listAllInterior=(req,res)=>{
    Interior.find({}).populate("user").exec((err,interior)=>{
        if(err)
        return res.status(404).json({msg:"Error in getting Interior"})
        if(interior)
        return res.status(201).json(interior)
    })
    
}
exports.listAllElectrician=(req,res)=>{
    Electrician.find({}).populate("user").exec((err,electrician)=>{
        if(err)
        return res.status(404).json({msg:"Error in getting electrician"})
        if(electrician)
        return res.status(201).json(electrician)
    })
    
}
exports.ViewArchitect=(req,res)=>{
    Architect.findOne({user:ObjectId(req.body.workerid)}).populate("user").exec((err,architect)=>{
        if(err)
        return res.status(404).json({msg:"Error in getting architect"})
        if(work)
        return res.status(201).json(architect)
    })   
}

exports.viewInterior=(req,res)=>{
    Interior.findOne({user:ObjectId(req.body.workerid)}).populate("user").exec((err,interior)=>{
        if(err)
        return res.status(404).json({msg:"Error in getting Interior"})
        if(interior)
        return res.status(201).json(interior)
    })
    
}
exports.viewElectrician=(req,res)=>{
    Electrician.findOne({user:ObjectId(req.body.workerid)}).populate("user").exec((err,electrician)=>{
        if(err)
        return res.status(404).json({msg:"Error in getting electrician"})
        if(electrician)
        return res.status(201).json(electrician)
    })
    
}

