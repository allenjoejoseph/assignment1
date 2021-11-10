let num = document.getElementById("number");
let mail = document.getElementById("mail");
let pwd = document.getElementById("pwd");

function validate(){
    if(mail.value==""||pwd.value==""){
        alert("Fields cannot be empty");
        return false;
    }
    else{
        return true;
    }
}





