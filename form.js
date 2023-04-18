let firstname=document.getElementById("firstname");
let lastname=document.getElementById("lastname");
let username=document.getElementById("username");
let originalname=/^[a-zA-Z]+ [a-zA-Z]+$/;
let email=document.getElementById("email");
let originalemail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let phone=document.getElementById("phone");
var originalphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let password=document.getElementById("password");
var originalpassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
var confirmpassword=document.getElementById("confirmpassword");
var s=document.getElementById("gender");
var n=document.getElementById("gender");

let flag=1;
function validateForm(){
 

  if(firstname.value==""){
    document.getElementById("firstNameError").innerHTML=("firstname cannot be empty");
    flag=0;

  }
 
  else if(!isNaN(firstname.value)){
    document.getElementById("firstNameError").innerHTML=("enter only words");
    flag=0;
  }
  else{
    document.getElementById("firstNameError").innerHTML=("");
    
  }

  if(lastname.value==""){
    document.getElementById("lastNameError").innerHTML=("lastname cannot be empty");
    flag=0;

  }
  else if(!isNaN(lastname.value)){
    document.getElementById("lastNameError").innerHTML=("enter only words");
    flag=0;
  }
 
  else{
    document.getElementById("lastNameError").innerHTML=("");
  }

if(username.value==""){
  document.getElementById("userError").innerHTML=("username cannot be empty");
   flag=0;
   
}
else if(!isNaN(username.value)){
  document.getElementById("userError").innerHTML=("enter only words");
  flag=0;
}
else if(username.value.length<3){
  document.getElementById("userError").innerHTML=("username cannot be less than 3 character");
  flag=0;
}

else{
  document.getElementById("userError").innerHTML=("");
}

if(email.value==""){
  document.getElementById("emailError").innerHTML=("email cannot be empty");
  flag=0;
}
else if(!(email.value.match(originalemail))){
  document.getElementById("emailError").innerHTML=(" enter valid email");
  flag=0;
}
else{
  document.getElementById("emailError").innerHTML=("");
}

if(phone.value==""){
  document.getElementById("phoneError").innerHTML=("phone no cannot be empty");
  flag=0;
}
else if(!(phone.value.match(originalphone))){
  document.getElementById("phoneError").innerHTML=("please enter valid phone no");
  flag=0;
}
else{
  document.getElementById("phoneError").innerHTML=("");
}

if(password.value==""){
  document.getElementById("passError").innerHTML=("password cannot be empty");
  flag=0;
}
else if(!(password.value.match(originalpassword))){
  document.getElementById("passError").innerHTML=("please enter valid password!");
  flag=0;
}
else{
  document.getElementById("passError").innerHTML=("");
}

if(password.value!=confirmpassword.value)
{
  document.getElementById("confirmpassError").innerHTML=("password does not match");
}
else{
  document.getElementById("confirmpassError").innerHTML=("");
}

// if(s.checked && n.checked){
//   document.getElementById("gendererror").innerHTML=("please select one");
// }
// else{
//   document.getElementById("gendererror").innerHTML=("");
// }




if(flag){
  return true;
}
else{
  return false;
}
  
}

function Toggle() {
  var temp = document.getElementById("password");
  if (temp.type === "password") {
      temp.type = "text";
  }
  else {
      temp.type = "password";
  }
}