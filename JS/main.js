var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')



var signUpArray = []
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}

function clearSignIn() {
    signinEmail.value = ""
    signinPassword.value = ""
}



function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}
function login() {
    if (isLoginEmpty() == false) {
        document.getElementById('signInIncorrect').classList.remove("d-none");
        return false
    } else {
        document.getElementById("signContainer").classList.add("d-none");
        document.getElementById("homePage").classList.remove("d-none");
    }
}



function displaySignUp() {
    document.getElementById("signInGroup").classList.add("d-none");
    document.getElementById("signUpGroup").classList.remove("d-none");
}



function isSignupEmpty() {

    if (signupName.value == "" || signupPassword.value == "" || signupEmail.value == "") {
        return false
    } else {
        return true
    }
}
function signUp() {

    if (isSignupEmpty() == false) {
        document.getElementById('signUpIncorrect').classList.remove("d-none");
        return false
    } else {
        document.getElementById("signUpGroup").classList.add("d-none");
        document.getElementById("signInGroup").classList.remove("d-none");
    }
}

function displaySignIn() {
    document.getElementById("signUpGroup").classList.add("d-none");
    document.getElementById("signInGroup").classList.remove("d-none");
}




function logout() {
    document.getElementById("homePage").classList.add("d-none");
    document.getElementById("signContainer").classList.remove("d-none");
    clearSignIn()
}