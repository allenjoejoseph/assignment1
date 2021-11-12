let num = document.getElementById("number");
let mail = document.getElementById("mail");
let pwd = document.getElementById("pass");

function myfunc(){
validate();
phoneValidate();
passwordValidation();
}

function validate(){
    if(mail.value.trim()==""){
        alert("Email cannot be empty");
        return false;
    }
    else if (pwd.value.trim()==""){
        alert("Password cannot be blank");
        return false;
    }
    else if (pwd.value.length <=8){
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

function passwordValidation(){
    var p = document.getElementById("pass").value;
    if(p.match(/[A-Z]/)){
        return true,
    }
    else if(p.match(/[a-z]/)){
        return true,
    }
    else if(p.match(/[0-9]/)){
        return true;
    }
    else{
        alert("Please add an Uppercase, Lowercase and a number to your Password");
        return false;
    }

}



