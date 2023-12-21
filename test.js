document.addEventListener('DOMContentLoaded', function(event) {
    event.stopPropagation();
    let focusPass = false;
    let focusUsername =false;
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const signin = document.getElementById("signin");



    function doSomeThing(evt){

        if (evt == "focusin"){
            password.style.display="pink"
        }
        if (evt == "focusout"){
            password.style.display="black"
        }
    }

    ['focusin','focusout'].forEach( evt => 
        password.addEventListener(evt, doSomeThing, false)
    );

    username.addEventListener("focus", function(event) {
        focusUsername = true;
        event.target.style.background = "pink";
    });

    username.addEventListener("focusout", function(event) {
        focusUsername = true;
        event.target.style.background = "aliceblue";
    });

    document.addEventListener('keydown', function(event) {
        var name = event.key;
        if (focusPass || focusUsername){
            if (name === 'Enter') {
                signin.style.display="none"
                focusPass = false;
                return;
            }
        }
    });
}); 