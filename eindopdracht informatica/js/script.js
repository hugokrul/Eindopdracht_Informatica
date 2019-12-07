// ajax checken


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

    // making a localStorage item
    userTrue = localStorage.getItem("username");
    passTrue = localStorage.getItem("password");
    
    // checking if the username AND the password is already in taken
    if (usernameSignup === userTrue && passwordSignup === passTrue) {
        alert("This username is already taken, please choose a new one.") // displays error message
    } else if (usernameSignup === userTrue) { // checking if the username is already in use
        alert("This username already exists please get a new one.") // displays error message
    } else {
        // setting the localstorage username to the username from the input
        localStorage.setItem("username", usernameSignup);
        // setting the localstorage password to the password from the input
        localStorage.setItem("password", passwordSignup);
    }

    // reload the page if everythings okay
    location.reload();
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