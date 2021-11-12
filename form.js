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
 
function phoneValidate(num){
   var s = ^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4};
   if(num.value.match(s))
     {
      return true;
     }
   else
     {
     alert("Please enter a valid phone number.");
     return false;
     }
}





