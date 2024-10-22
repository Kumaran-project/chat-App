const express=require("express");
const fs=require("fs");

const router=express.Router();

router.get("/",(req,res,next)=>{
  fs.readFile('./Chat.txt', (err, data) => {
    if (err) throw err;
    console.log(req.body,data);

    res.send(`<p>${data}</p><br>
      <form action="/" method="POST"><input type="text" name="message"></br><button>submit</button></form>`);
  });
  
 
})

router.post("/", (req, res, next) => {
 localStorage.setItem
  fs.appendFile('./Chat.txt',message, (err) => {
    if (err) throw err;
    console.log(err);
  });

  res.redirect("/");
  
});

module.exports=router;