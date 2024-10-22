const express=require("express");
const router=express.Router();

router.get("/login",(req,res,next)=>{
  localStorage.setItem("UserName")
  res.send('<form action="/" method="POST"><input type="text" name="User"></br><button>submit</button></form>');
})





module.exports=router;