const nameId = document.getElementById("name");
const username = document.getElementById("username");
const password = document.getElementById("password");

let nameValue = nameId.nameValue;
let usernameValue = username.Value;
let passwordValue = password.Value;   

const btnClick= document.getElementById("btn-click");

btnclick.addEventListener("click", function() {
    console.log("Name: " + nameId.value);
    console.log("Username: " + username.value);
    console.log("Password: " + password.value);

});
