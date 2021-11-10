let num = document.getElementById("number").value;
let mail = document.getElementById("mail").value;
let pwd = document.getElementById("pwd").value;

function validate(){
    if(mail==""||pwd==""){
        alert("Fields cannot be empty");
        return false;
    }
    else{
        return true;
    }
}





