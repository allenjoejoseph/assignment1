let num = document.getElementById("number");
let mail = document.getElementById("mail");
let pwd = document.getElementById("pass");

function validate(){
    if(mail.value.trim()==""){
        alert("Email cannot be empty");
        return false;
    }
    else if (pwd.value.trim()==""){
        alert("Password cannot be blank");
        return false;
    }
    else if (pwd.value.length <=5){
        alert("Password is too short");
        pwd.style.border="2px solid red";
        return false;
    }
    else{
        return true
    } 
}
 
function phoneValidate(){
   
   var a = document.getElementById("number").value;
   if (a==""){
       alert("Enter the number");
       return false;
   }
   else if(isNaN(a)){
       alert("Enter digits only");
       return false;
   }
   else if(a.length<10){
       alert("Mobile number should be of 10 digits");
       return false;
   }
   else if(a.length>10){
       alert("Mobile number should be of 10 digits");
       return false;
   } 
   else{
       return true
   }
}





