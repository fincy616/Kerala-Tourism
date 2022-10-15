let email= document.getElementById("email");
let error = document.getElementById("error");
let password = document.getElementById("password");
let inputEmail = document.getElementById("inputEmail");
let inputPassword1 = document.getElementById("inputPassword1");
let innputPassword2 = document.getElementById("inputPassword2");
let inputphn = document.getElementById("inputphn");
let phnerror = document.getElementById("phnerror");



let regpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
let regExp = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
let regPhoneNumber1 = /^([0-9]{10,10})$/;
// let regpass = /^([\w\!@#$%^&*]{8,16})$/
function validate(){
    
    if(regExp.test(email.value)){
        if(regpass.test(password.value)){
            return true;
        }
        else
            alert("password must contain 8-10 characters,one capital letter,one special character,and one number.")
            return false;
        }

        
    else{
        alert("Invalid email id")
        return false;
    }

}

function validation(){
    if(regExp.test(inputEmail.value)){
        if(regpass.test(inputPassword1.value)){
            if(regPhoneNumber1.test(inputphn.value))
            return true;
            else{
                alert("invalid phone number")
                return false;
            }
        }
        else
            alert("password must contain 8-10 characters,one capital letter,one special character,and one number.")
            return false;
        }

        
    else{
        alert("Invalid email id")
        return false;
    }
}

function validatepass(){
    if(inputPassword1.value != innputPassword2.value){
        // error.innerHTML("Incorrect password");
        // error.style.color= "red";
        alert("password not match")
        return false;
        
    }
    else{
        return true;
    }
}


function phnvalid(){
    if(regPhoneNumber1.test(inputphn.value)){
        return true
    }
    else{
        phnerror.innerHTML="enter 10 digit number";
        phnerror.style.color="red";
        return false;
    }
}