function Login() {
    
    var loginOptions = Array.from(document.getElementsByClassName("button"));
    console.log(loginOptions);
    var usernameInputBox = document.getElementById("username");
    var passwordInputBox = document.getElementById("form-error");

    // get the unilogin button from loginOptions
    loginOptions.forEach(element => {
        console.log(element);
        if (element.value == "uni_idp") {
            console.log("unilogin button found");
            element.click();
        }
    }); 
    
    if (usernameInputBox) {
        console.log("username input box found");
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
        console.log("Autocomplete is enabled");
        Login()
    };
});



