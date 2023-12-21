document.addEventListener('DOMContentLoaded', function(event) {
    event.stopPropagation();
    let focusPass = false;
    let focusUsername =false;
    
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const signin = document.getElementById("signin");
    const logger = document.getElementById("logger");



    password.addEventListener("focus", function(event) {
        focusPass = true;
        event.target.style.background = "pink";
    });

    password.addEventListener("focusout", function(event) {
        focusPass = false;
        event.target.style.background = "aliceblue";
    });

    username.addEventListener("focus", function(event) {
        focusUsername = true;
        event.target.style.background = "pink";
    });

    username.addEventListener("focusout", function(event) {
        focusUsername = false;
        event.target.style.background = "aliceblue";
    });

    function changeDisplay(){
        signin.style.display="none";
        logger.style.display="block";      
    }

    document.addEventListener('keydown', function(event) {
        var name = event.key;
        if (focusPass || focusUsername){
            if (name === 'Enter') {
                changeDisplay();
                focusPass = false;
                focusUsername =false;
                return;
            }
        }
    });


});