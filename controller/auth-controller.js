var User=require('../model/users')
var Interior=require('../model/interiordesigner')
var Architect=require('../model/architect')
var Electroinics=require('../model/electronics')
var Customer=require('../model/customer')


var jwt= require("jsonwebtoken");
const expressJwt = require("express-jwt");

const { ObjectId } = require('mongodb');

exports.addUser=(req,res)=>{
    console.log(req.body)
    User.findOne({email:req.body.email},(err,user)=>{ //find query
        if(err){
            return res.status(404).json({error:"Error in fetching email"})
        }
        else if(user){
            return res.status(404).json({error:"User already exist"})
        }
        else{
            let user=new User(req.body)

            user.save((err,newUser)=>{
                if(err){
                return res.status(404).json({error:err})
                }
                else if(newUser){
                    if(req.body.usertype=="interior")
                    {
                       
                        req.body.user=ObjectId(newUser._id)
                        let interior=new Interior(req.body)
                        
                        interior.save((err,newInterior)=>{
                            if(err){
                                console.log(err)
    
                                return res.status(404).json({error:err})
                                }
                                else{
                                    return res.status(201).json(newInterior)  
                                }
                        })
                                        
                            
                                    
                     }
                     else if(req.body.usertype=="architect")
                     {
                         
                        req.body.user=ObjectId(newUser._id)
                        let architect=new Architect(req.body)
                        
                        architect.save((err,Architect)=>{
                            if(err){
                                return res.status(404).json({error:err})
                                }
                                else{
                                    return res.status(201).json(Architect)  
                                }
                        })
                                    
                      }
                      else if(req.body.usertype=="electrician")
                     {
                         
                        req.body.user=ObjectId(newUser._id)
                        let electrician=new Electroinics(req.body)
                        
                        electrician.save((err,electrician)=>{
                            if(err){
                                return res.status(404).json({error:err})
                                }
                                else{
                                    return res.status(201).json(electrician)  
                                }
                        })
                                    
                      }
                    else if(req.body.usertype=="customer")
                     {
                        
                        req.body.user=ObjectId(newUser._id)
                        let customer=new Customer(req.body)
                        
                        customer.save((err,newCus)=>{
                            if(err){
                                return res.status(404).json({error:err})
                                }
                                else{
                                    return res.status(201).json(newCus)  
                                }
                        })
                                         
                             
                                    
                      }
                      
                    
                    }
                }
                        )
                }
            })
        }

exports.login=(req,res)=>{
    User.findOne({email:req.body.email,password:req.body.password},(err,user)=>{
        if(err){
            return res.status(404).json({error:"Error in fetching email"})
        }
        else if(user){
            //create token
            const token = jwt.sign({_id:user._id},process.env.SECRET);
            //put token in cookie
            res.cookie("token",token,{expire: new Date()+9999});
            return res.status(201).json({token,user})
        }
        else{
            return res.status(404).json({error:"Invalid email or password"})
        }
    })
}
exports.findUser=(req,res)=>{
    console.log(req.body)
    User.findOne({_id:ObjectId(req.body.userid)},(err,user)=>{
        if(err){
            return res.status(404).json({error:"Error in fetching user"})
        }
        else if(user){
            return res.status(201).json(user)
        }
        else{
            return res.status(404).json({"error":"User not found"})
        }
    })
}

 