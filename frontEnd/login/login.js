document.querySelector('form').addEventListener("submit",async(e)=>{
  try{
    e.preventDefault();
  const userName=document.querySelector("#name").value;
  const password=document.querySelector("#password").value;
  const response=axios.post('http://localhost:3000/api/v1/sign-up',{userName,password});
  alert("you have succesfully logged in")
  }
  catch(error)
  {
    console.log(error);
  }
  

})