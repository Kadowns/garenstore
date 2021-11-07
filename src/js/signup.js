
function signup(){

    var temp_username = document.getElementById("username").value
    var temp_email = document.getElementById("email").value
    var temp_password = document.getElementById("password").value
    var temp_password_confirmation = document.getElementById("password_confirmation").value

    if (temp_password != temp_password_confirmation){
        alert("As senhas não são iguais, verifique-as e tente novamente.")
        return;
    }

    var newEntry = {
        user:temp_username,
        email:temp_email,
        password:temp_password,
        cart:[]
    }

    var entries = JSON.parse(window.localStorage.getItem("entries"));
    if (entries == null){
        entries = []
    }

    for (var i = 0; i < entries.length; i++){

        var entry = JSON.parse(entries[i]);

        if (entry == null){
            continue;
        }

        if (entry.user == newEntry.user){
            alert("User name already exists!");
            return;
        }

        if (entry.email == newEntry.email){
            alert("Email address is already in use!");
            return;
        }
    }

    entries.push(JSON.stringify(newEntry))

    window.localStorage.setItem("entries", JSON.stringify(entries))
    alert("Conta criada com sucesso! Faça o login.")
    window.location.href = "signin.html";
}