// Set default vaules
chrome.storage.sync.get(['username', "password", "Autocomplete"], function(result) {
    
    if (String(result.password)== "undefined") {
        chrome.storage.sync.set({"username": ""})
    }

    if (String(result.password) == "undefined") {
        chrome.storage.sync.set({"password": ""})
    }

    if (String(result.Autocomplete) == "undefined") {
        chrome.storage.sync.set({"Autocomplete": "false"})
    }

});

// get the elements need from html
var username = document.getElementById("username")
var password = document.getElementById("password")
var Autocomplete = document.getElementById("Autocomplete")
var savebutton = document.getElementById("save")

// set the html elements to the save data
chrome.storage.sync.get(["Autocomplete", "username", "password"], function(result) {
    if (String(result.Autocomplete) == "true") {
        Autocomplete.checked = true
    }else {
        Autocomplete.checked = false
    }
    
    username.value = result.username
    password.value = result.password
});


savebutton.addEventListener('click', close_window, false);

// save the data in the html
function close_window() {
    if (Autocomplete.checked) {
        chrome.storage.sync.set({"Autocomplete": "true"})
    }else {
        chrome.storage.sync.set({"Autocomplete": "false"})
    }
    
    chrome.storage.sync.set({"username": username.value})
    chrome.storage.sync.set({"password": password.value})
    window.close();
}