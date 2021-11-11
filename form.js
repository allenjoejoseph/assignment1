let num = document.getElementById("number");
let mail = document.getElementById("mail");
let pwd = document.getElementById("pwd");

function validate(){
    if(mail.value==""){
        alert("Email cannot be empty");
        return false;
    }
    else if (pwd.value==""){
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





