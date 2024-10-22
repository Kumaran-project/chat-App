const express=require("express");
const app=express();
const userroutes=require("./Routes/User");
const loginRoute=require("./Routes/login")

app.use(express.urlencoded({ extended: false }))
app.use(userroutes);
app.use(loginRoute);

app.listen(4000,()=>{
  console.log("Server Started running on 4000 port");
})


app.use((req,res,next)=>{
  res.status(404).send("<h1>Oops page not found </h1>")
})