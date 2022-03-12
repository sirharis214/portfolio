$(document).ready(function(){
    var timeDelay = 2000; 
    setTimeout(displayWelcome, timeDelay);

    function displayWelcome(){
        // Get the username from sessionStorage
        let name = JSON.parse(sessionStorage.getItem("username"));
        let username = name["username"];
        // console.log(username); 

        // All the toast elements header
        let allHeaders = document.getElementsByClassName("header-text");
        // Go thorugh each header and Add the text.
        [].slice.call( allHeaders ).forEach(function ( header ) {
            header.innerHTML = `Hey ${username}`;
        });

        // Get the toast element on the page
        let welcomeToast = document.getElementById("welcomeToast");
        // Now that the header text has been added for the toast, display the Welcome toast to user.
        let toast = new bootstrap.Toast(welcomeToast); // initilzied 
            toast.show(); //show

        // To display all Toasts
        // var toastElList = [].slice.call(document.querySelectorAll('.toast'));
        // var toastList = toastElList.map(function(toastEl) {
        //     return new bootstrap.Toast(toastEl);
        // });
        // toastList.forEach(toast => toast.show());
    }
});
