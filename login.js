const user = "Aditi";
const userEmail = "aditi@gmail.com";
function login(){
    if(user === "Aditi"){
        console.log("User is Authorized");
    }
}
login();

function loginWithGoogle(){
    if(userEmail === "aditi@gmail.com"){
        console.log("User is Authorized");
    }
}
loginWithGoogle();

function signinWithApple(){
    if(userEmail === "aditi@gmail.com"){
        console.log("User is Authorized");
    }
}
signinWithApple();