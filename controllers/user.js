const user=require("../Models/user");
const bcyrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { userInfo } = require("os");

module.exports.AddUser=async(req, res, next) => {
  try{
    const {userName,password,email,phoneNumber}=req.body;
 const existingUser=await user.findOne({where:{email}});
 if(existingUser)
 return res.status(409).json({success:"false",message:"user Already exist"})
  
 const hashedPassword=await bcyrypt.hash(password,20);
 const newUser=await user.create({userName,password:hashedPassword,email,phoneNumber});
 res.status(201).json({success:true});
  }
  catch(error){
    console.log(error);
    return res.status(500).json({success:"false",message:"internal server error"})
  }
 
}
// const secret=require('crypto').randomBytes(64).toString('hex');
// console.log("secret",secret);

function generateToken(userName,id){
  return jwt.sign({userName,id},process.env.SECRET_KEY,{expiresIn:"1h"});
}
module.exports.loginUser=async(req, res, next) => {
  try{
    const {email,password}=req.body;
 const existingUser=await user.findOne({where:{email}});
 if(!existingUser)
 return res.status(404).json({success:"false",message:"user not found"})
  
 const matches=bcyrypt.compare(password,existingUser.password);
 if(matches==true){
  res.status(200).json({success:true,token:generateToken(existingUser.userName,existingUser.id)});
 }
 else
 res.status(401).json({success:false,message:"Invalid UserName or password"});
  }
  catch(error){
    console.log(error);
    return res.status(500).json({success:"false",message:"internal server error"})
  }
 
}
