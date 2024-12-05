document.querySelector('form').addEventListener("submit",async(e)=>{
  try{
    e.preventDefault();
  const userName=document.querySelector("#name").value;
  const email=document.querySelector("#email").value;
  const password=document.querySelector("#password").value;
  const phoneNumber=document.querySelector("#phone-number").value;

  const response=axios.post('http://localhost:3000/api/v1/sign-up',{userName,email,password,phoneNumber});
  alert("you have succesfully signed up")
  }
  catch(error)
  {
    console.log(error);
  }
  

})