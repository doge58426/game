document.addEventListener('DOMContentLoaded', function () {
    let focusPass = false;
    let focusUsername = false;
    let toggleLogger = true; // all good here
    const logButton = document.getElementById("gameLoss"); 
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const signin = document.getElementById("signin");
    const logger = document.getElementById("logger");
    const gamesLogged = document.getElementById("gamesLogged");
    var username;
    var password;

    passwordField.addEventListener("focus", function () {
        focusPass = true;
    });

    passwordField.addEventListener("focusout", function () {
        focusPass = false;
    });

    usernameField.addEventListener("focus", function () {
        focusUsername = true;
    });

    usernameField.addEventListener("focusout", function () {
        focusUsername = false;
    });

    logButton.addEventListener("click", function (event) {
        event.target.style.background="red";
        log();
    });

    function toggleDisplay() {
        if (toggleLogger) {
            signin.style.display = "none";
            logger.style.display = "block";
            toggleLogger = false;
            return;
        }
        if (!toggleLogger) {
            signin.style.display = "block";
            logger.style.display = "none";
            toggleLogger = true;
            return;
        }
        return;
    }

    function getUsernamePassword(){
        globalThis.username = document.getElementById("username").value;
        globalThis.password = document.getElementById("password").value;
        return;
    }   
    
    function log(){
        let log = document.createElement("p");
        log.innerHTML = `⁣⁣⁣⁣⁣  ${document.getElementById("username").value} lost the game at: ${new Date().toLocaleTimeString({'hour12': false})}`
        gamesLogged.appendChild(log);
    }
    
    document.addEventListener('keydown', function (event) {

        var name = event.key;
        
        if (focusPass || focusUsername) {
            if (name === 'Enter') {
                getUsernamePassword();
                
                toggleDisplay();
                focusPass = false;
                focusUsername = false;
                return;
            }
        }

        if (name === "Escape"){
            if (!toggleLogger){
                toggleDisplay();
                return;
            }
        }

    });


});
