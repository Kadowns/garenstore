
function signup(){
    var temp_username = document.getElementById("username").value
    var temp_email = document.getElementById("email").value
    var temp_password = document.getElementById("password").value
    var temp_password_confirmation = document.getElementById("password_confirmation").value

    if (temp_password != temp_password_confirmation){
        alert("As senhas não são iguais, verifique-as e tente novamente.")
        return;
    }

    var database = JSON.parse(window.localStorage.getItem("database"));

    var entry = {
        user:temp_username,
        email:temp_email,
        password:temp_password
     }

     alert(JSON.stringify(entry));
}