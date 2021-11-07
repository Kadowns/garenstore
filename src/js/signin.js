
function signin() {
    var temp_email = document.getElementById("email").value
    var temp_password = document.getElementById("password").value

    var entries = JSON.parse(window.localStorage.getItem("entries"));

    if (entries == null){
        entries = []
    }

    for (var i = 0; i < entries.length; i++){
        var entry = JSON.parse(entries[i]);

        if (entry == null){
            continue;
        }

        if (entry.email == temp_email){
            if (entry.password == temp_password){
                window.localStorage.setItem("current_user", entries[i])
                alert("Login bem sucedido")
                return;
            }
            alert("Senha incorreta!");
            return;
        }
    }

    alert("Usuário não encontrado!");
}