let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
errorMsg = classes("error"),
form = id("mainForm"),
successIcon = classes("fa-check"),
failIcon = classes("fa-exclamation");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    engine(username, 0, "Username cannot be blank");
    //engine(email, 1, "Email cannot be blank");
});

/*  id will target our id
    serial will target our classes [error class, success and failure icons]
    message will print a message inside our .error class 
*/
let engine = (id, serial, message) => {
    if (id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        // icons
        failIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } 
    else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        // icons
        failIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}