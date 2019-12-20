var usernameLogin, passwordLogin, usernameSignup, passwordSignup, userTrue, passTrue, user, pass, encryptedPass, nonEncryptedPass;

user = localStorage.getItem("username");

// making the login function
function login(form) {
    // checking the userName input value
    usernameLogin = document.getElementById("userName").value;
    passwordLogin = document.getElementById("password").value;

    // checking in local storage for the "username" item
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
    // checking the userNameSignup input value
    usernameSignup = document.getElementById("userNameSignup").value;
    passwordSignup = document.getElementById("passwordSignup").value;
    emailSignup = document.getElementById("email").value;

    // making a localStorage item
    userTrue = localStorage.getItem("username");
    passTrue = localStorage.getItem("password");
    email = localStorage.getItem("emailLocal");
    
    localStorage.setItem("password", passwordSignup);


    checkSignup()
    checkUsername()
    checkEmail()
    // message dat het gelukt is
    alert("Succes!!")

    // reload the page if everythings okay
    location.reload();
}

function checkSignup() {
    if (usernameSignup === userTrue && passwordSignup === passTrue) {
        alert("Your already signed up.") // displays error message
    }
}

function checkUsername() {
    if (usernameSignup === userTrue) { // checking if the username is already in use
        alert("This username already exists please get a new one.") // displays error message
    }

    localStorage.setItem("username", usernameSignup);
}

function checkEmail() {
    if (emailSignup === email) {
        alert("This email is already in use, please check it.")
    }

    localStorage.setItem("email", emailSignup);
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}