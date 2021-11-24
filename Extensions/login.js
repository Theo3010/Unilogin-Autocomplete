function Login() {
    
    var usernameInputBox = document.getElementById("username");
    var passwordInputBox = document.getElementById("form-error");
    
    if (usernameInputBox) {
        //get username from storage
        chrome.storage.sync.get(['username'], function(result) {

            //find username input box and set the value to the username
            usernameInputBox.value = result.username;
            
            //click the next button
            document.querySelector("button").click();
        });
    }
        
    else if (passwordInputBox) {
        //get password from storage
        chrome.storage.sync.get(['password'], function(result) {

            //set the value to the password
            passwordInputBox.value = result.password;
            
            //click the next button
            document.querySelector("button").click();
        });
    }
    
}

chrome.storage.sync.get(["Autocomplete"], function(result) {
    if(String(result.Autocomplete) == "true" ) {
        Login()
    };
});



