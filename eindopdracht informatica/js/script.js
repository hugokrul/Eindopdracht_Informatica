// ajax checken


var usernameLogin, passwordLogin, usernameSignup, passwordSignup, userTrue, passTrue, user, pass, encryptedPass, nonEncryptedPass;

user = localStorage.getItem("username");


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

function login(form) {
    usernameLogin = document.getElementById("userName").value;
    passwordLogin = document.getElementById("password").value;

    userTrue = localStorage.getItem("username");
    passTrue = localStorage.getItem("password");

    /*the following code checkes whether the entered userid and password are matching*/
    if(usernameLogin == userTrue && passwordLogin == passTrue) {
        window.open('index_home.html', '_self');/*opens the target page while Id & password matches*/
        alert("SUCCES!")
    }
    else {
        alert("Error Password or Username.");/*displays error message*/
        alert("Try again")
    }
} 

/* */

function signup() {
    usernameSignup = document.getElementById("userNameSignup").value;
    passwordSignup = document.getElementById("passwordSignup").value;

    encryptedPass = window.btoa(passwordSignup);
    nonEncryptedPass = window.atob(encryptedPass)

    userTrue = localStorage.getItem("username");
    passTrue = localStorage.getItem("password");
    
    if (usernameSignup === userTrue && passwordSignup === passTrue) {
        alert("This username is already taken, please choose a new one.")
    } else if (usernameSignup === userTrue) {
        alert("This username already exists please get a new one.")
    } else {
        localStorage.setItem("username", usernameSignup);
        localStorage.setItem("password", passwordSignup);
    }

    location.reload();
}