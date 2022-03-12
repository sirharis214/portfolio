// Functions
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

// Store variables
let username = id("username"),
form = id("mainForm"),

errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

// Submit event listener        
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    engine(username, 0, "Username cannot be blank");
    // engine(email, 1, "Email cannot be blank");
});

// Module
// id will target our id
// serial will target our classes [error class, success and failure icons]
// message will print a message inside our .error class 
let engine = (id, serial, message) => {
    // .trim() to remove white spaces
    if (id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        // id.style.border = "2px solid red";
        id.style.border = "2px solid #ff0000";
        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } 
    
    else {
        errorMsg[serial].innerHTML = "";
        // id.style.border = "2px solid green";
        id.style.border = "2px solid #00b300";
        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
        
        // Save username to Session.
        var user = {'username':id.value.trim()};
        sessionStorage.setItem('username', JSON.stringify(user));
        // var obj = JSON.parse(sessionStorage.username);
        // console.log(obj);
        // Re-Direct to Home page
        window.location.href = "sample.html";
    }
}