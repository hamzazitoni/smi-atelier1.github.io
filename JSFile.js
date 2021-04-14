const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "hamza" && password === "123") {
        alert("You have successfully logged in.");
        window.location.assign("hompage.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

/*const noteForm = document.getElementById("note-form");
const resultatbutton = document.getElementById("note-form-submit");
resultatbutton.addEventListener("click", (avg) => {
    avg.preventDefault();
    const c = noteForm.C.value;
    const ia = noteForm.IA.value;

    v = (c + ia )/2;
    document.getElementById("output").innerHTML = v;
})*/
function avg(){
    var c = document.getElementById("C").value;
    var ai = document.getElementById("IA").value;
    
    var v = (parseInt(c) + parseInt(ai));
    document.getElementById("output").innerHTML = v;
    
}
