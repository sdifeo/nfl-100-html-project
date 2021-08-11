var submitButton = document.getElementById("submit")
var username = document.getElementById("username")
var password = document.getElementById("password")

function submit(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    if (username === "admin" && password === "12345" ){
        window.location = "./index.html"

    }
    else
    {
        alert("Wrong username/password")
    }

}